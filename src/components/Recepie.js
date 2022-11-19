import React ,{useEffect,useState}from 'react'
import RecepieItem from './RecepieItem'
// const axios = require('axios').default;

export default function Recepie(props) {
    const [recipies, setrecipies] = useState([])
    const fetchRecipies = async()=>{
        // props.setProgress(10)
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.search}`;
        console.log(url)
        // setloading(true)
        let data = await fetch(url)
        // props.setProgress(30)
        let parsedData = await data.json();
        setrecipies(parsedData.meals)
        // setloading(false)
        // settotalResults(parsedData.totalResults)
        // props.setProgress(100)
        console.log(parsedData)
      }
      useEffect(() => {
        fetchRecipies();
    }, [])
  return (
    <div className='container my-4 row mx-auto text-center'>
        <div className='container text-center'>
          <div className='row'>

            {recipies.map((element,index) => {

              return <div className='col-md-4 py-4' key={index} >
                < RecepieItem key={element.idMeal} title={element.strMeal}  imageUrl={element.strMealThumb === null ? 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png' : element.strMealThumb}  />
              </div>
            })}

          </div>
        </div>
    </div>
  )
}
