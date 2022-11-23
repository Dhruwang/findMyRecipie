import React from 'react'
import background from '../images/background.jpg'
import "../Home.css"
export default function Home(props) {
    // const [value, setValue] = useState("");
    return (
       

        <>
            <div  className="py-4 img-fluid" style={{ backgroundImage: `url(${background})`, height: "60vh", backgroundSize: 'cover' ,opacity:"0.8"}}>
                <div className='container py-4 h-50'>
                    <h1 className='text-center my-4 text-dark display-1'>Find a Recipie</h1>
                <div className="input-group w-75 mx-auto col-md-8">
                    {/* <input value={value} onChange={e => setValue(e.target.value)} />; */}
                    <input type="search" id="search" ref={props.inputRef} className="form-control rounded"  placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-primary" onClick={props.handleClick}>search</button>
                </div>
                </div>
            </div>
        </>

    )
}
