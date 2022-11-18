import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white py-4 px-4 fixed-top" >
                <div className="container-fluid">
                    <a className="navbar-brand fs-2" href="/">FindMyRecepie</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fs-6">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" >Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
