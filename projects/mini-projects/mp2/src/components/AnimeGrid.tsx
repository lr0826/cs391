import styled from "styled-components";
import {Anime} from "../interfaces/Anime.ts";



interface Props {
    items: Anime[];
}

const Grid = styled.section`
    display: flex;
    flex-direction: row;
`;

export default function AnimeGrid({ items }: Props) {
    return (
        <Grid>
            {items.map((a) => (
                <article key={a.mal_id}>
                    <img src={a.images.jpg.image_url} alt={a.title} />
                    <h2>{a.title}</h2>
                    <p><strong>Score:</strong> {a.score ?? "N/A"}</p>
                    <p><strong>Episodes:</strong> {a.episodes ?? "?"}</p>
                    <p><strong>Year:</strong> {a.year ?? "—"}</p>
                    <p>
                        <a href={a.url}>
                            View on MyAnimeList
                        </a>
                    </p>
                </article>
            ))}
        </Grid>
    );
}
