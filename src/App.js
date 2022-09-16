import React, { useState, useEffect } from "react";
import "./index.scss";
import Collection from "./components/Collection";
import Navigation from "./components/Navigation";


let cats = [
  { name: "All" },
  { name: "React" },
  { name: "Vue" },
  { name: "Vanilla JS" },
  { name: "HTML & CSS" },
];

function App() {
  const [collection, setCollection] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  const category = categoryId ? `category=${categoryId}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63158cbd33e540a6d37ee228.mockapi.io/photo_collections?page=$&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Something goes wrong");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  return (
    <div className="App">
      <Navigation />
      <h1>Alex Koshelenko</h1>
      <h2>Click on Links at the top to have more information about me and my projects.</h2>
      <div className="top">
        <ul className="tags">
          {cats.map((e, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ""}
              key={e.name}
            >
              {e.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="search-input"
          placeholder="Search by name"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          collection
            .filter((e) =>
              e.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => {
              return (
                  <Collection key={index} name={obj.name} images={obj.photos} link={obj.link} description={obj.description}/>
              );
            })
        )}
      </div>
    </div>
  );
}

export default App;
