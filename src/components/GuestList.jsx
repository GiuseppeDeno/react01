import React from "react";
import GuestItem from "./GuestItem";
//in guest list metto gli stati di tutti iguests da cercare tramite la filter bar, che sara una sua child

//const [searchGuest , setSearchGuest]=useState("");
//è la props che devo passare alla filterbar ma non serve perche la riceve come prop dall'app



const GuestList = ({ guests, setGuests, searchGuest }) => {
  const filteredGuests = guests.filter(g =>
    g.name.toLowerCase().includes(searchGuest.toLowerCase())
  );

  return (
    <div className="guest-box">
      <h3 className="guest-title">Guest iscritti: {filteredGuests.length}</h3>
      <div className="guests-list">
        {filteredGuests.map((guest) => (
          <GuestItem key={guest.id} guest={guest} setGuests={setGuests} />
        ))}
      </div>
    </div>
  );
};


export default GuestList;
