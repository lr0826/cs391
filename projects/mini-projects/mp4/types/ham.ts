export type Artwork = {
    id: number;
    title: string;
    dated: string;
    byline: string;
    image: string | null;
    href: string;
    objectnumber: string;
};

export type ArtistPack = {
    name: string;
    personId?: number;
    error?: string;
    artworks: Artwork[];
};
