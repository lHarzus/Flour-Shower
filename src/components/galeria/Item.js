import React from "react";

export const Item = ({ item }) => {
  console.log(Array.from(Array(item.rating).keys()));
  return (
    <div className="item">
      <div className="content">
        <img src={item.url}></img>
        <p>{item.name}</p>
      </div>
      <div>
        {Array.from(Array(item.rating).keys()).map(e => (
          <i key={e} className="bi bi-star-fill star"></i>
        ))}
        {Array.from(Array(5 - item.rating).keys()).map(e => (
          <i key={e} className="bi bi-star star"></i>
        ))}
      </div>
    </div>
  );
};
