import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
export default function RecepieItem(props) {
    return (
        <>
            <div className="card" style={{border:"none",borderRadius:"0px"}}>
                <Link to={"food/"+props.title}><img src={props.imageUrl} className="card-img-top" alt="..."  /></Link>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"></p>
                </div>
            </div>
        </>
    )
}
