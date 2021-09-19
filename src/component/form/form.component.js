import React, { useState } from "react";
import "./Form.style.css";

function FormComponent() {
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  let name, value;
  const getData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...User, [name]: value });
  };

  const { firstName, lastName, email, number } = User;

  const sendData = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://fir-learn-fbcbc-default-rtdb.firebaseio.com/reactFrom.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        User,
      }),
    });
  };

  return (
    <div>
      <form method="POST">
        <input type="text" name="firstName" placeholder="enter name" autoComplete="off" value={User.firstName} onChange={getData} required />

        <input type="text" name="lastName" placeholder="enter lastname" autoComplete="off" value={User.lastName} onChange={getData} required />

        <input type="email" name="email" placeholder="enter email" autoComplete="off" value={User.email} onChange={getData} required />

        <input type="text" name="number" placeholder="Number" autoComplete="off" value={User.number} onChange={getData} required />

        <button type="submit" className="submiteButton" onClick={sendData}>
          submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
