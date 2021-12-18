import React, {useEffect, useState} from 'react'
import Recipe from './components/Recipe'
import "./style.css"

const App = () => {

  const APP_ID = "cb119d9e"
  const APP_KEY = "378e487993cf1c8373978b6e6d09bc0a"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async() => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
  }

  const updateSearch = (e) =>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  const getSearch = (e) =>{
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }



  return (

    <div className="container">
        <form className="searchForm" onSubmit={getSearch}>            
          <input type="text" className="searchBar"
          placeholder="search for food..." 
          value={search} onChange={updateSearch}/>

          <button className="searchButton" type="submit">
            Search
          </button>
        </form> 

      <div className="wrapper">
        <div className="recipes">
            {recipes.map(rec =>(
              <Recipe key={rec.recipe.label}
              title={rec.recipe.label}
              calories={rec.recipe.calories}
              image={rec.recipe.image}
              ingredients={rec.recipe.ingredients} 
              />
            ))} 
        </div> 
      </div> 
  
    </div>

  )
}

export default App

