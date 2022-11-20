import React from 'react'

export default function RecepieItem(props) {
    return (
        <>
            <div className="card" style={{width: "20rem",border:"none",borderRadius:"0px"}}>
                <img src={props.imageUrl} className="card-img-top" alt="..."  style={{height: "15rem" ,width:"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"></p>
                </div>
            </div>
        </>
    )
}
