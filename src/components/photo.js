import React from "react";

export default ({ data }) => {
    return (
        <div className="image">
            <img src={data.hdurl ? data.hdurl : data.url}/>
        </div>
    )
}