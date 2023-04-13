import MyRecipesComponent from "./MyRecipesComponent";
import { useEffect, SetStateAction, Key } from "react";
import { useState } from "react";
import "./searchAPI.css";

export interface Tsearch {
  recipe: {
    ingredients: string;
    calories: string;
    image: string[];
    label: string;
  };
}

function Appi() {
  const MY_ID = "b8157177";
  const MY_KEY = "a2db20b852b8a6869b107a919c16d0c5";

  const [myRecipes, setMyRecipes] = useState([]);
  const [mySearch, setMySearch] = useState("");
  const [wordSubmited, setWordSubmited] = useState("salade");

  useEffect(() => {
    const myRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${wordSubmited}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      setMyRecipes(data.hits);
    };
    myRecipes();
  }, [wordSubmited]);
  const myRecipesSearch = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setWordSubmited(mySearch);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Find a Recipe :) </h1>
      </div>

      <form className="container" onSubmit={finalSearch}>
        <input
          className="search"
          placeholder="Search..."
          onChange={myRecipesSearch}
          value={mySearch}
        ></input>

        <button>
          <img
            src="https://img.icons8.com/windows/512/search.png"
            alt="foto"
            width="35px"
            className="icons"
          />
        </button>
      </form>
      <div>
        {myRecipes.map(
          (
            element: {
              recipe: {
                label: string;
                image: string;
                calories: string;
                ingredientLines: string;
              };
            },
            index: Key | null | undefined
          ) => (
            <MyRecipesComponent
              label={element.recipe.label}
              image={element.recipe.image}
              calories={element.recipe.calories}
              ingredients={element.recipe.ingredientLines}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Appi;
