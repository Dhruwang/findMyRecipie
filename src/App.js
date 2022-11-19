
import './App.css';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';
import Recepie from './components/Recepie';
import {useRef,useState} from 'react';


function App() {
  const inputRef = useRef(null);
  const [search, setsearch] = useState("")
    function handleClick() {
        setsearch(inputRef.current.value);
        console.log(search)
      }
  return (
    <>
    <Navbar sticky='top'/>
    <Quote />
    <Home inputRef={inputRef} handleClick={handleClick}/>
    <Recepie search={search}/>
    </>
  );
}

export default App;
