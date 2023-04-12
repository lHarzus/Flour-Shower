import React, { Fragment } from "react";
import video from "../../videos/bakery.mp4";

export const Album = () => {
  return (
    <div className="album">
      <h1>Álbum de fotografias</h1>
      <video className="video" width="400" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
};
