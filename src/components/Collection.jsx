import React from "react";

function Collection({ name, images, link, description}) {
  return (
    <div className="collection">
      <a href={link} target="_blank" rel="noreferrer"><img className="collection__big" src={images[0]} alt={name} />
      <h4>{name.toUpperCase()}</h4>
      <h6>{description}</h6>
      </a>
      
    </div>
  );
}

export default Collection;
