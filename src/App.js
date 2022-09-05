import React, { useState, useEffect } from "react";
import "./index.scss";
import Collection from "./Collection";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBp16t-F_6AnZTp1YL099-PjwwT0obvjfc",

  authDomain: "askoshelenko.firebaseapp.com",

  projectId: "askoshelenko",

  storageBucket: "askoshelenko.appspot.com",

  messagingSenderId: "694251178999",

  appId: "1:694251178999:web:7b2715766347ec57857cf2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

//


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
  const [page, setPage] = useState(1);
  
  const category = categoryId ? `category=${categoryId}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63158cbd33e540a6d37ee228.mockapi.io/photo_collections?page=${page}&limit=6&${category}`
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
  }, [categoryId, page]);

  return (
    <div className="App">
      <h1>My projects</h1>
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
                <Collection key={index} name={obj.name} images={obj.photos} />
              );
            })
        )}
      </div>
      <ul className="pagination">
        {[...Array(3)].map((e, i) => (
          <li
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
