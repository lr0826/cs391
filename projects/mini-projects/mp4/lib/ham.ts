
const BASE = process.env.HAM_API_BASE!;
const KEY  = process.env.HAM_API_KEY!;

type Person = { id: number; displayname?: string };
type ObjectRec = {
    id: number; title?: string; dated?: string;
    people?: { name: string }[];
    primaryimageurl?: string | null;
    url?: string | null;
    objectnumber?: string | null;
};

async function hamFetch(pathWithQuery: string) {
    const url = new URL(pathWithQuery, BASE);
    url.searchParams.set("apikey", KEY);
    const r = await fetch(url.toString(), { cache: "no-store" });
    if (!r.ok) {
        const txt = await r.text();
        throw new Error(`HAM ${r.status}: ${txt.slice(0, 200)}`);
    }
    return r.json();
}

export async function findPersonByName(name: string): Promise<Person | null> {
    const data = await hamFetch(`/person?size=1&q=${encodeURIComponent(name)}&fields=id,displayname`);
    return data?.records?.[0] ?? null;
}

export async function getObjectsByPersonId(personId: number, size = 5): Promise<ObjectRec[]> {
    const qs = new URLSearchParams({
        person: String(personId),
        size: String(size),
        hasimage: "1",
        fields: "id,title,dated,people,primaryimageurl,url,objectnumber",
    });
    const data = await hamFetch(`/object?${qs.toString()}`);
    return data?.records ?? [];
}
