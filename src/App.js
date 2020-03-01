import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "df334d84";
  const APP_KEY = "93725584736c6435c3d3c7d08bec9fcf";

  // const [counter, setCounter] = useState(0);

  // const updateCounter = () => {
  //   setCounter(counter + 1);
  // };

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] =  useState("");
  const [query, SetQuery] = useState("chicken");

  //leave second argument empty "[]" to only run useEffect ONCE
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    //console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = event => {
    setSearch(event.target.value);
    // console.log(search);
  };

  const getSearch = event => {
    event.preventDefault();

    SetQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
