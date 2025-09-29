export interface Anime {
    mal_id: number;
    url: string;
    title: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url?: string;
            large_image_url?: string;
        };
        webp?: {
            image_url: string;
            small_image_url?: string;
            large_image_url?: string;
        };
    };
    score: number | null;
    episodes: number | null;
    year: number | null;
}