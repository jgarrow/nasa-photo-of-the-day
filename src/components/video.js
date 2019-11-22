import React from "react";
import styled from "styled-components";

// To make videos responsive and stay to scale - 
// https://medium.com/@kevinsimper/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default ({ data }) => {
  return (
    <VideoWrapper>
      <Iframe src={data.url} frameBorder="0" title={data.title}/>
    </VideoWrapper>
  );
};