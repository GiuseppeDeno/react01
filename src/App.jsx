import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

import Form from './components/form';
import Footer from './components/Footer'
import GuestList from './components/GuestList';

function App() {
const [guests, setGuests]=useState(()=>{
  /*richiamo i guests salvati nel LS */
  const savedGuests = localStorage.getItem("guests");
    return savedGuests ? JSON.parse(savedGuests) : [];
  });
/*stato che visualizza tutti i guests aggiunti 
const totalGuests = guests.length;*/


/*per usare il LS bisogna usare lo useEffect 
useEffect(()=>{
  logica che viene chiaata quando cambiano i parametri nell'array
  }, [parametri])
  
  nel nostro caso, salviamo i guests SOLO QUANDO cambia uno dei guests o ne aggiungiamo uno*/
  


    // salva ogni volta che guests cambia
  useEffect(() => {
    localStorage.setItem("guests", JSON.stringify(guests));
  }, [guests]);


  return (
    <>
      <Navbar />


      <Header name="Giuseppe" />


      <div className="main-content">

        <LeftColumn />


        <RightColumn />

      </div>
      {/*visualizza guest in un div   <div className="guests-list">
        <h3>Guests iscritti ({totalGuests})</h3>
        {guests.map((guest, index) => (
          <div key={index}>
            <strong>{guest.name}</strong> – {guest.email}
          </div>
        ))}
      </div>*/}
      

   <GuestList guests={guests} setGuests={setGuests} />
      <Form setGuests={setGuests} />

      <Footer />


    </>
  )
}

export default App
