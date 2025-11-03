// app/artists/page.tsx
import { headers } from "next/headers";
import ArtistsDisplay from "@/app/components/ArtistsDisplay";
import type { ArtistPack } from "@/types/ham";

export const dynamic = "force-dynamic";

async function fetchFeatured(origin: string): Promise<{ artists: ArtistPack[] }> {
    const url = new URL("/api/featured", origin).toString();
    const r = await fetch(url, { cache: "no-store" });
    const data = (await r.json()) as { artists: ArtistPack[]; error?: string };
    if (!r.ok) throw new Error(data?.error ?? "Failed to load featured artists");
    return data;
}

export default async function ArtistsPage() {
    const h = await headers();                      // ← add await
    const proto = h.get("x-forwarded-proto") ?? "http";
    const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
    const origin = `${proto}://${host}`;

    const data = await fetchFeatured(origin);

    return (
        <main>
            <h1 className="text-2xl font-semibold">Artists</h1>
            <p className="text-sm text-white-600">Five artists, five works each.</p>
            <ArtistsDisplay inputArtists={data.artists} />
        </main>
    );
}



