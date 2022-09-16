import React from "react";

function Collection({ name, images }) {
  return (
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <h4>{name}</h4>
    </div>
  );
}

export default Collection;
