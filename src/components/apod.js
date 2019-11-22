import React from "react";
import styled from "styled-components";

import Video from "./video";
import Photo from "./photo";

const Container = styled.div`
    box-sizing: border-box;
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
`

export default ({ data, currentDate }) => {
    return (
        <Container>
            <h1>{data.title}</h1>
            <p>{currentDate}</p>
            {data.media_type === "video" ? (
                <Video data={data} />
            ) : (
                <Photo data={data} />
            )}
            <p>{data.explanation}</p>
        </Container>
    );
};
