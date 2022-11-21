import React from 'react'

export default function FullRecepie(props) {
  console.log("rendering full recepie")
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">{props.title}</li>
        </ol>
      </nav>
      <h1>hello</h1>
    </>
  )
}
