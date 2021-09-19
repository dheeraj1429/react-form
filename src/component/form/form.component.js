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
  const changeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...User, [name]: value });
  };

  const { firstName, lastName, email, number } = User;

  const getData = async (e) => {
    e.preventDefault();

    if (firstName && lastName && email && number) {
      const res = await fetch(`https://fir-learn-fbcbc-default-rtdb.firebaseio.com/storeFromDemo.json`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          User,
        }),
      });

      if (res) {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
        });
        alert("done");
      }
    } else {
      alert("fill the data");
    }
  };

  return (
    <div>
      <form method="POST">
        <input type="text" name="firstName" placeholder="enter name" value={User.firstName} onChange={changeHandler} autoComplete="off" required />

        <input type="text" name="lastName" placeholder="enter lastname" value={User.lastName} onChange={changeHandler} autoComplete="off" required />

        <input type="email" name="email" placeholder="enter email" value={User.email} onChange={changeHandler} autoComplete="off" required />

        <input type="text" name="number" placeholder="Number" value={User.number} onChange={changeHandler} autoComplete="off" required />

        <button type="submit" className="submiteButton" onClick={getData}>
          submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
