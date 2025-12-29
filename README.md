# 📰 Simple Blog – React Version

Questo progetto è la trasformazione di un **blog statico HTML/CSS/JavaScript** in una **Single Page Application React**, realizzata con **Vite**.

L’obiettivo è studiare e applicare i concetti fondamentali di React:
- componentizzazione
- gestione dello stato
- props
- form controllati
- rendering dinamico
- ottimizzazione con **React.memo**
- ricerca live con **FilterBar**

---

## Tecnologie utilizzate

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS**
- **Font Awesome**

---

## Struttura del progetto
```
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Header.jsx
│ ├── LeftColumn.jsx
│ ├── RightColumn.jsx
│ ├── Form.jsx
│ ├── GuestItem.jsx
│ ├── GuestList.jsx
│ ├── FilterBar.jsx
│ └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── App.css
```




---

## Funzionalità principali

### 1. Refactoring da HTML a React
- Layout originale HTML suddiviso in **componenti React riutilizzabili**
- Sostituzione di `class` con `className`
- Struttura modulare e più manutenibile

### 2. Sistema di iscrizione Guests
- Form controllato con `useState`
- Campi:
  - Nome
  - Email (con validazione HTML `type="email"`)
  - Password
  - `isAdmin` (checkbox)
- Alla sottomissione:
  - viene creato un oggetto `guest` con `id` univoco
  - aggiunto allo stato globale tramite props
- Visualizzazione:
  - lista dei guests iscritti
  - numero totale dei guests
  - rendering condizionale: se `isAdmin` → mostra “È un amministratore”, altrimenti “Non è un amministratore”
- Possibilità di **rimuovere singoli guest** con un bottone ❌
- Persistenza tramite **LocalStorage**

### 3. Ricerca live
- Componente `FilterBar` permette di filtrare i guest per nome
- Aggiornamento in tempo reale della lista durante la digitazione
- Possibilità di resettare il campo di ricerca con un pulsante

### 4. Ottimizzazione con React.memo
- `GuestItem` è memoizzato con `React.memo` per evitare re-render non necessari
- Solo i guest modificati o aggiunti vengono renderizzati nuovamente

---

## Gestione dello stato

Lo stato principale `guests` è gestito nel componente **App.jsx** e passato ai figli tramite props, seguendo il principio di **single source of truth**:

```js
const [guests, setGuests] = useState([]);
const [searchGuest, setSearchGuest] = useState("");
setGuests permette ai componenti figli (Form, GuestList) di aggiornare lo stato

searchGuest gestisce l’input di ricerca per il filtro live

Componenti principali

Form.jsx → gestisce la creazione di nuovi guest

GuestList.jsx → mostra la lista dei guest filtrati

GuestItem.jsx → singolo guest, memoizzato con React.memo

FilterBar.jsx → input di ricerca con pulsante di reset

Navbar/Header/LeftColumn/RightColumn/Footer → layout e struttura del blog

Diagramma componenti

App
├─ Navbar
├─ Header
├─ LeftColumn
├─ RightColumn
├─ FilterBar
├─ GuestList
│   └─ GuestItem (React.memo)
├─ Form
└─ Footer
App
├─ Navbar
├─ Header
├─ LeftColumn
├─ RightColumn
├─ FilterBar
├─ GuestList
│   └─ GuestItem (React.memo)
├─ Form
└─ Footer
Avvio del progetto
npm install
npm run dev

Obiettivi didattici

Questo progetto nasce come esercizio pratico di apprendimento React, partendo da un progetto reale e già esistente, per comprendere:

come “pensare a componenti”

come gestire dati condivisi

come far comunicare i componenti tra loro

come ottimizzare i render con React.memo

come implementare una ricerca live e form controllati

Autore

👤 Giuseppe Denora