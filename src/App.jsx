import {React,useState} from 'react';
import logo from './logo.svg';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mynavbar from './Navbar/Mynavbar';
import Main from './Main';

function App() {  
  const[showcomponent,setshowcomponent]=useState(true)
  return (
    <>
    
    <Mynavbar/>
    <Routes>
    <Route path='' element={showcomponent? <Main/>:<> </>}/>
      <Route path='Main' element={<Main/>}/>
    </Routes>
    </>
  );
}

export default App;
