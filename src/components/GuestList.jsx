import GuestItem from "./GuestItem";

const GuestList = ({ guests, setGuests }) => {
  return (
    <div className="guests-list">
      <h3>Guests iscritti: {guests.length}</h3>

      {guests.map((guest) => (
        <GuestItem
          key={guest.id}
          guest={guest}
          setGuests={setGuests}
        />
      ))}
    </div>
  );
};

export default GuestList;
