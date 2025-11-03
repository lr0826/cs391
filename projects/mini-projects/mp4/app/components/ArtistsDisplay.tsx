"use client";
import { useState } from "react";
import type { ArtistPack } from "@/types/ham";
import ArtistCard from "./ArtistCard";

export default function ArtistsDisplay({ inputArtists }: { inputArtists: ArtistPack[] }) {
    // mirrors your PostsDisplay.tsx pattern with local state
    const [artists] = useState(inputArtists);

    return (
        <div className="flex w-full flex-col items-center">
            <ul className="mt-4 w-full space-y-8">
                {artists.map((a) => (
                    <li key={a.name}>
                        <h2 className="text-xl font-semibold">{a.name}</h2>

                        {a.error ? (
                            <div className="mt-2 rounded border border-yellow-300 bg-yellow-50 p-3 text-sm">
                                Couldn’t load works for this artist: {a.error}
                            </div>
                        ) : (
                            <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                                {a.artworks.map((o) => (
                                    <ArtistCard
                                        key={o.id}
                                        title={o.title}
                                        image={o.image}
                                        href={o.href}
                                        byline={o.byline}
                                        dated={o.dated}
                                        objectnumber={o.objectnumber}
                                    />
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
