import styled from "styled-components";
import {useEffect, useState} from "react";
import AnimeGrid from "./components/AnimeGrid.tsx";
import {Anime} from "./interfaces/Anime.ts";

const ParentDiv=styled.div`
    width: 100vw;
    margin: auto;
`;
export default function App(){
    const [items, setItems] = useState<Anime[]>([]);
    useEffect(() => {
        async function fetchTopAnime(): Promise<void> {

            const res = await fetch("https://api.jikan.moe/v4/top/anime?limit=24&sfw=true");
            const json = await res.json();
            const data = Array.isArray(json.data) ? json.data : [];
            setItems(data);
        }
        fetchTopAnime()
            .then(() => console.log("Top Anime fetched successfully"))
            .catch((e: Error) => console.log("There was a error: " + e));

    }, []);

    return(
        <ParentDiv>
            <h1>Top Anime</h1>
            <AnimeGrid items={items}/>
        </ParentDiv>
    )
}
