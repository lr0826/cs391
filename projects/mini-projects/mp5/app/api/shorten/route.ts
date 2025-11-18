// app/api/shorten/route.ts
import { NextRequest, NextResponse } from "next/server";
import getCollection, { URLS_COLLECTION } from "@/db";
import type { Document } from "mongodb";

type ShortenBody = {
    url: string;
    alias: string;
};

// Mongo document type for this collection
interface UrlDoc extends Document {
    alias: string;
    url: string;
    createdAt: Date;
}

function isValidAlias(alias: string): boolean {
    // 3–30 chars, letters, numbers, _ and -
    return /^[a-zA-Z0-9_-]{3,30}$/.test(alias);
}

function isValidUrl(url: string): boolean {
    try {
        const parsed = new URL(url);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
        return false;
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as ShortenBody;

        const rawUrl = (body.url || "").trim();
        const rawAlias = (body.alias || "").trim();

        if (!rawUrl || !rawAlias) {
            return NextResponse.json(
                { ok: false, error: "URL and alias are required." },
                { status: 400 },
            );
        }

        if (!isValidAlias(rawAlias)) {
            return NextResponse.json(
                {
                    ok: false,
                    error:
                        "Alias must be 3–30 characters and contain only letters, numbers, '-' or '_'.",
                },
                { status: 400 },
            );
        }

        // BACKEND URL VALIDATION (required by assignment)
        if (!isValidUrl(rawUrl)) {
            return NextResponse.json(
                {
                    ok: false,
                    error:
                        "Please enter a valid URL starting with http:// or https://.",
                },
                { status: 400 },
            );
        }

        // Use the UrlDoc type here so TS knows about createdAt
        const urls = await getCollection<UrlDoc>(URLS_COLLECTION);

        // Check for duplicate alias
        const existing = await urls.findOne({ alias: rawAlias });
        if (existing) {
            return NextResponse.json(
                {
                    ok: false,
                    error: "That alias is already taken. Please choose another.",
                },
                { status: 400 },
            );
        }

        await urls.insertOne({
            alias: rawAlias,
            url: rawUrl,
            createdAt: new Date(),
        });

        const origin = new URL(req.url).origin;
        const shortUrl = `${origin}/${rawAlias}`;

        return NextResponse.json(
            { ok: true, shortUrl },
            { status: 201 },
        );
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { ok: false, error: "Invalid request." },
            { status: 400 },
        );
    }
}

