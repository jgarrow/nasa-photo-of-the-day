import React from "react";

export default ({ data }) => {
  return (
    <div className="video">
      <iframe src={data.url} frameBorder="0" />
    </div>
  );
};