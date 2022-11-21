import React, { useState, useEffect } from 'react'

export default function FullRecepie(props) {
  const [title, settitle] = useState(window.location.pathname.replaceAll("%20", " ").replace("/food/", ""))
  const [imgUrl, setimgUrl] = useState("")
  const [category, setcategory] = useState("")

  const fetchRecipies = async () => {
    props.setProgress(10)
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`;
    console.log(url)
    // setloading(true)
    let data = await fetch(url)
    props.setProgress(30)
    console.log(data)
    let meal = await data.json();
    console.log(meal)
    if (meal.meals !== null) {
      setimgUrl(meal.meals[0]['strMealThumb'])
      setcategory(meal.meals[0]['strCategory'])
    }
    props.setProgress(100)
  }
  useEffect(() => {
    fetchRecipies();
  }, [])
  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1>{title}</h1>
        <div className='d-flex'>
          <img src={imgUrl} alt="Food name" style={{ height: "25rem", width: "30rem" }} />
          <p className='mx-2 fs-4'><span className='fw-bolder'>Category :</span> {category}</p>
        </div>

      </div>
    </>
  )
}
