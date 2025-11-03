// components/ArtistCard.tsx
type Props = {
    title: string;
    image: string | null;
    href: string;
    byline: string;
    dated: string;
    objectnumber: string;
};

export default function ArtistCard({ title, image, href, byline, dated, objectnumber }: Props) {
    return (
        <li className="rounded-xl border p-3">
            <a href={href} target="_blank" rel="noreferrer">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                    {image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img alt={title} src={image} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                        <div className="flex h-full items-center justify-center text-sm text-white">No Image</div>
                    )}
                </div>
                <h3 className="mt-2 line-clamp-2 font-medium">{title}</h3>
            </a>
            <p className="text-sm text-white-600">{byline || "—"}</p>
            <p className="text-xs text-white-500">{dated} · #{objectnumber}</p>
        </li>
    );
}
