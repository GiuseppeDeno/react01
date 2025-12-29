
const GuestItem = ({ guest, setGuests }) => {

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

      <button onClick={handleDelete}>❌ Elimina</button>
    </div>
  );
};


export default GuestItem;