import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light mx-4 py-4">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2" href="/">Navbar</a>
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
            <div className='w-50 text-center mx-auto'>
                <p className=''>"One of the very best things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating. "</p>
                <p className='fw-bold'>Luciano Pavarotti</p>
            </div>
        </>
    )
}
