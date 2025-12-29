import React from 'react'

function FilterBar({ searchGuest, setSearchGuest }) {
  function ClearButton(){
      setSearchGuest(""); // imposta lo stato a stringa vuota

  }
  return (
    <div className="filter-bar">
      <input type="text"
       placeholder='ricerca nome Guest'
       value={searchGuest}
       onChange={(e) => setSearchGuest(e.target.value)}
       
       />
      <button onClick={ClearButton}>reset ricerca</button>


    </div>
  )
}

export default FilterBar