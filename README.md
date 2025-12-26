# 📰 Simple Blog – React Version

Questo progetto è la trasformazione di un **blog statico HTML/CSS/JavaScript** in una **Single Page Application React**, realizzata con **Vite**.

L’obiettivo è studiare e applicare i concetti fondamentali di React:
- componentizzazione
- gestione dello stato
- props
- form controllati
- rendering dinamico

---

##  Tecnologie utilizzate

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS**
- **Font Awesome**

---

##  Struttura del progetto

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Header.jsx
│ ├── LeftColumn.jsx
│ ├── RightColumn.jsx
│ ├── Form.jsx
│ └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── App.css


---

##  Cosa fa l’app

###  Refactoring da HTML a React
- Il layout originale HTML è stato suddiviso in **componenti React riutilizzabili**
- Sostituzione di `class` con `className`
- Struttura modulare e più manutenibile

###  Sistema di iscrizione Guests
- Form controllato con `useState`
- Campi:
  - Nome
  - Email (con validazione HTML `type="email"`)
- Alla sottomissione:
  - viene creato un oggetto `guest`
  - viene aggiunto allo stato globale tramite props
- Visualizzazione:
  - lista dei guests iscritti
  - numero totale dei guests

---

##  Gestione dello stato

Lo stato `guests` è gestito nel componente **App.jsx** e passato ai componenti figli tramite **props**, seguendo il principio di:

> **Single source of truth**

```js
const [guests, setGuests] = useState([]);

Prossimi sviluppi

Persistenza dei guests con LocalStorage

 Rimozione di un guest

 Validazioni avanzate del form

 Miglioramento UI / UX

 Separazione componente GuestList

 Avvio del progetto
npm install
npm run dev


Obiettivo didattico
Questo progetto nasce come esercizio pratico di apprendimento React, partendo da un progetto reale e già esistente, per comprendere:

come “pensare a componenti”

come gestire dati condivisi

come far comunicare i componenti tra loro

👤 Autore
Giuseppe Denora

yaml
Copia codice

