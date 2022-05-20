import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import SearchPage from "./pages/SearchPage";
import Nav from "./components/Layout/Nav";
import Body from "./components/Layout/Body";
import Footer from "./components/Layout/Footer";


function App() {


  
return(
    <>
      <div className="content-container">
        <Nav />
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
