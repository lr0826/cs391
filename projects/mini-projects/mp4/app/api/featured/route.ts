
import { NextResponse } from "next/server";
import { findPersonByName, getObjectsByPersonId } from "@/lib/ham";

const ARTISTS = ["Claude Monet","Vincent van Gogh","Rembrandt",
    "Katsushika Hokusai","Pablo Picasso"];

export async function GET() {
    try {
        const artists = [];
        for (const name of ARTISTS) {
            try {
                const person = await findPersonByName(name);
                if (!person) {
                    artists.push({ name, error: "Artist not found", artworks: [] });
                    continue;
                }
                const records = await getObjectsByPersonId(person.id, 5);
                artists.push({
                    name: person.displayname ?? name,
                    personId: person.id,
                    artworks: records.map(o => ({
                        id: o.id,
                        title: o.title ?? "Untitled",
                        dated: o.dated ?? "",
                        byline: o.people?.[0]?.name ?? "",
                        image: o.primaryimageurl ?? null,
                        href: o.url ?? `https://harvardartmuseums.org/collections/object/${o.id}`,
                        objectnumber: o.objectnumber ?? String(o.id),
                    })),
                });
            } catch (e: any) {
                artists.push({ name, error: String(e?.message ?? e), artworks: [] });
            }
        }
        return NextResponse.json({ artists }, { status: 200 });
    } catch (e: any) {
        // Whole upstream failure (rate limit / outage) — finite error, no endless loading
        return NextResponse.json(
            { error: "Upstream API failure", detail: String(e?.message ?? e) },
            { status: 502 }
        );
    }
}
