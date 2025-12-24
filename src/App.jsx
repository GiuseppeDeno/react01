import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import Article from "./components/Article";


function App() {
  

  return (
    <>
     <Navbar />


     <Header name="Giuseppe"/>


      <div className="main-content">

       <LeftColumn />


       <RightColumn />
       
      </div>


      <footer className="footer">
        <div className="footer-content">
          <p>Simple Blog &copy; 2023. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
          </div>
          <p className="copyright">Designed with 
            
          
          <i
  className="fas fa-heart"
  style={{ color: '#e74c3c' }}
></i>
 for the web community</p>
        </div>
      </footer>
    </>
  )
}

export default App
