
import './App.css';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';
import Recepie from './components/Recepie';
import { useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullRecepie from './components/FullRecepie';


function App(props) {
  const inputRef = useRef(null);
  const [search, setsearch] = useState("")
  const [progressvalue, setProgressvalue] = useState(0)
  const [link, setlink] = useState("")
  const setProgress = (value) => {
    setProgressvalue(value)
  }
  function handleClick() {
    setsearch(inputRef.current.value);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar sticky='top' />
        <LoadingBar
          color='#f11946'
          progress={progressvalue}
          onLoaderFinished={() => setProgress(0)}
          height={4}
        />
        <Routes>
          <Route exact path="/" element={<><Quote/><Home inputRef={inputRef} handleClick={handleClick} /><Recepie search={search} setProgress={setProgress} /></>} />
          <Route exact path="food/:foodName" element={<FullRecepie title={props.title}/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
