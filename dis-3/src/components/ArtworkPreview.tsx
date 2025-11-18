import styled from "styled-components";
import type { ArtworksProps } from "../type.ts";

const ArtworkPreviewDiv = styled.div`
    margin: 10px;
    padding: 4px;
    width: 400px;
    background-color: lightblue;
`;
export default function ArtworkPreview({ artwork } : { artwork: ArtworksProps }) {
    return (
        <ArtworkPreviewDiv>
            <h3>{artwork.title}</h3>
            <p>{artwork.place_of_origin}</p>
        </ArtworkPreviewDiv>
    );
}
