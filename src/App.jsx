import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

import Form from './components/Form';
import Footer from './components/Footer'

function App() {
const [guests, setGuests]=useState([])
/*stato che visualizza tutti i guests aggiunti */
const totalGuests = guests.length;


  return (
    <>
      <Navbar />


      <Header name="Giuseppe" />


      <div className="main-content">

        <LeftColumn />


        <RightColumn />

      </div>
      {/*visualizza guest in un div */}
        <div className="guests-list">
        <h3>Guests iscritti ({totalGuests})</h3>
        {guests.map((guest, index) => (
          <div key={index}>
            <strong>{guest.name}</strong> – {guest.email}
          </div>
        ))}
      </div>

      <Form setGuests={setGuests} />

      <Footer />


    </>
  )
}

export default App
