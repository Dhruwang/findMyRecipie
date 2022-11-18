
import './App.css';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar sticky='top'/>
    <Quote />
    <Home />
    </>
  );
}

export default App;
