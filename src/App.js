import React from "react";
import {Routes, Route} from 'react-router-dom';
import './App.css';


import SearchPage from "./pages/SearchPage";


import HomePage from './pages/HomePage';


function App() {


  
return(
    <>
    <Routes>
      <Route path="/" element= {<HomePage />} />
      
      <Route path="/search" element ={<SearchPage />} />
        
    </Routes>
        
    </>
  );
}

export default App;
