import GuestItem from "./GuestItem";

const GuestList = ({ guests, setGuests }) => {
  return (
    <div className="guest-box">
      <h3 className="guest-title">
        Guest iscritti: {guests.length}
      </h3>

      <div className="guests-list">
        {guests.map((guest) => (
          <GuestItem
            key={guest.id}
            guest={guest}
            setGuests={setGuests}
          />
        ))}
      </div>
    </div>
  );
};

export default GuestList;
