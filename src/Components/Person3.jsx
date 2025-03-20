import React from "react";

const Person3 = ({ name, age, panCard }) => {
  return (
    <div>
      <h1>Name = {name}</h1>

      {/* Correcting the heading nesting issue */}
      <h3>{age > 18 ? "You can drive" : "You cannot drive"}</h3>

      {/* Conditional rendering without invalid nested <h1> */}
      {panCard === true && <h3>You can open an account in our bank</h3>}
    </div>
  );
};

export default Person3;
