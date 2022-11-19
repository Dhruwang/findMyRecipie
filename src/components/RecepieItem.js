import React from 'react'

export default function RecepieItem(props) {
    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"></p>
                    <a href="/" className="btn btn-primary">Show Recipie</a>
                </div>
            </div>
        </>
    )
}
