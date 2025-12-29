import React, { useEffect } from "react";

const GuestItem = ({ guest, setGuests }) => {
    useEffect(() => {
    console.log("Guest montato:", guest.name);
    return () => console.log("Guest rimosso:", guest.name);
  }, []);
  


    const handleDelete = () => {
    setGuests((prev) =>
      prev.filter((g) => g.id !== guest.id)
    );
  };

  /*prev è lo stato precedente più aggiornato
  filter crea un nuovo array

NON modifica prev

React vede un nuovo riferimento → re-render 
g.id !== guest.id

tieni tutti i guest

tranne quello con lo stesso id

📌 Solo l’elemento cliccato viene escluso.*/

    return (
    
 <div className="guest-card">
      <p><strong>{guest.name}</strong></p>
      <p>{guest.email}</p>
     <p> {guest.isAdmin ? "È un amministratore" : "Non è un amministratore"}</p>
     
      <button onClick={handleDelete}>❌ Elimina</button>
    </div>
     
   
  );
};


// memoizzazione
export default React.memo(GuestItem);
/// usando React.memo non somonto e monto tutti icomponenti di Guestlist, ma solo quello cambiati! //prima avevo  export default GuestItem.!!