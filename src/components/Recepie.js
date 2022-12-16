import React, { useEffect, useState } from 'react'
import RecepieItem from './RecepieItem'
// const axios = require('axios').default;

export default function Recepie(props) {
  const [recipies, setrecipies] = useState([])
  const [results, setresults] = useState("all")
  console.log('rerendering')

  const fetchRecipies = async () => {
    props.setProgress(10)
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.search}`;
    console.log(url)
    // setloading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json();
    if (parsedData.meals !== null) {
      setrecipies(parsedData.meals)
      setresults(`Showing results for ${props.search}`)
      
    }
    else{
      console.log('check')
      setrecipies([])
      setresults("Sorry no results found")
    }
    // setloading(false)
    // settotalResults(parsedData.totalResults)
    props.setProgress(100)
    
  }
  useEffect(() => {
    fetchRecipies();
  },[props.search])
  return (
    <div className='container my-4 row mx-auto text-center' id='recipe'>
      <h2>{results}</h2>
      <div className='container text-center'>
        <div className='row'>
          {console.log(recipies)}
          {recipies !== null && recipies.map((element, index) => {

            return <div className='col-lg-4 col-md-6 py-4' key={index} >
              < RecepieItem key={element.idMeal} setFoodName={props.setFoodName} title={element.strMeal} imageUrl={element.strMealThumb === null ? 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png' : element.strMealThumb} />
            </div>
          })}

        </div>
      </div>
    </div>
  )
}
