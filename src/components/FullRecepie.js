import React, { useState, useEffect } from 'react'

export default function FullRecepie(props) {
  let title = window.location.pathname.replaceAll("%20", " ").replace("/food/", "")
  const [recipie, setRecipie] = useState("")
  const [loading, setloading] = useState(false)
  let items = [];
  let instructions =[];
  const fetchRecipies = async () => {
    props.setProgress(10)
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`;
    // setloading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let meal = await data.json();
    if (meal.meals !== null) {
      setRecipie(meal.meals[0])
    }
    setloading(false)
    props.setProgress(100)
  }
  useEffect(() => {
    fetchRecipies();
    setloading(true)
  }, [])
  if (loading) {
  } else if (recipie !== undefined) {

    for (let i = 1; i <= 20; i++) {
      items.push(recipie[`strIngredient${i}`]);
    }
    items = items.filter((item) => {
      return item !== "" && item !== null;
    });
    if(recipie['strInstructions']!==undefined){
      instructions = recipie['strInstructions'].split(".")
    instructions.pop()
    }
  }
  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active text-primary" aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1>{title}</h1>
        <i class="bi bi-tag fs-5 text-secondary my-2"></i><span className='mx-2 text-secondary'>{recipie["strTags"]}</span>
        <div className=''>
        
          <img src={recipie['strMealThumb']} className='my-4' alt="Food name" style={{ height: "30rem", width: "40rem" }} />
          {/* <div>
            <p className='mx-2 fs-4'><span className='fw-bolder'>Category :</span> {recipie['strCategory']}</p>
            <div className='d-flex'>
              <span className='fw-bolder mx-1 fs-4'>Ingredients :</span><ol className='text-dark'>{items.map(item => <li>{item}</li>)}</ol>
            </div>
          </div> */}
          <div className='instructions my-4'>
            <h2>Category</h2>
            <p className='text-dark'>{recipie["strCategory"]}</p>
          </div>
          <div className='instructions my-4'>
            <h2>Ingredients</h2>
            <ol className='text-dark'>{items.map(item => <li>{item}</li>)}</ol>
          </div>
          <div className='instructions my-4'>
            <h2>Instructions</h2>
            <ol className='text-dark'>{instructions.map(item => <li>{item}</li>)}</ol>
          </div>
        </div>
      </div>
    </>
  )
}
