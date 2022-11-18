import React from 'react'
import background from '../images/background.jpg'
export default function Home() {

    return (

        <>
            <div  className="py-4" style={{ backgroundImage: `url(${background})`, height: "70vh", backgroundSize: 'cover', opacity: "0.7" }}>
                <div className='container py-4'>
                <div className="input-group ">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>
                </div>
            </div>
        </>

    )
}
