import { useState } from "react";
/*
Perché Form riceve setGuests come prop? 
App è il componente padre

guests è lo stato condiviso

setGuests è la funzione che modifica quello stato
Il Form:

raccoglie name ed email

NON deve possedere la lista completa dei guests

deve solo dire: “aggiungi questo guest"
Reactvuole:
 un’unica fonte di verità
 lo stato in alto
 i figli che comunicano verso l’alto
 */

const Form = ({ setGuests }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", { name, email })
        /* crea un oggetto Guest che poi viene visualizzato in un div. passiamo i valori
        name e email come props*/
        const newGuest = {
            name,
            email,

        };
        setGuests(prev => [...prev, newGuest]);

        setName("");
        setEmail("");

    }

    return (
        <form onSubmit={handleSubmit} className="insert-form header">
            <h2>Form iscrizione Guests</h2>
            <input
                name="name"
                value={name}
                placeholder="inserisci il tuo nome"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                name="email"
                value={email}
                placeholder="inserisci la tua email"
                onChange={(e) => setEmail(e.target.value)}
                required>


            </input>
            <button type="submit">inserisci Guests </button>
        </form>
    );
};

export default Form;
