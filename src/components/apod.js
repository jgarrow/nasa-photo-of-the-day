import React from "react";

import Video from "./video";
import Photo from "./photo";

export default ({ data }) => {
    return (
        <div className="container">
            <h1>{data.title}</h1>
            <p>{data.date}</p>
            {data.media_type === "video" ? <Video data={data}/> : <Photo data={data}/>}
            <p>{data.explanation}</p>
        </div>
    )
}