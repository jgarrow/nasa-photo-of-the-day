import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
    height: 75vh;
`

const NasaImage = styled.img`
    height: 100%;
`

export default ({ data }) => {
    return (
        <ImageWrapper>
            <NasaImage src={data.hdurl ? data.hdurl : data.url} alt={data.title}/>
        </ImageWrapper>
    )
}