
import './App.css';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';
import Recepie from './components/Recepie';
import {useRef,useState} from 'react';
import LoadingBar from 'react-top-loading-bar'


function App() {
  const inputRef = useRef(null);
  const [search, setsearch] = useState("")
  const [progressvalue, setProgressvalue] = useState(0)
  const setProgress=(value)=>{
    setProgressvalue(value)
  }
    function handleClick() {
        setsearch(inputRef.current.value);
      }
  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progressvalue}
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
    <Navbar sticky='top'/>
    <Quote />
    <Home inputRef={inputRef} handleClick={handleClick}/>
    <Recepie search={search} setProgress={setProgress}/>
    </>
  );
}

export default App;
