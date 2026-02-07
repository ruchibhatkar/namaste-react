import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  return (
    <div className="userCard">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Ratnagiri</h3>
      <h3>Contact: ruchibhatkar</h3>
    </div>
  );
};

export default User;
