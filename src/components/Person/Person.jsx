const Person = ({ person }) => {
  const { name, age, isMarried, partnerName } = person;
  const maritalStatus = isMarried
    ? `Spouse: ${partnerName}`
    : 'I am not married';

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">Age: {age}</p>}
      <p className="Person__marriedStatus">{maritalStatus}</p>
    </div>
  );
};

export default Person;
