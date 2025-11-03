
import type { ArtistPack } from "@/types/ham";

export default async function getFeatured(): Promise<{ artists: ArtistPack[] }> {

    const r = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/featured`, { cache: "no-store" });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data?.error ?? "Failed to load featured artists");
    return data;
}
