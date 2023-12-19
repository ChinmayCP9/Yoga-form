import React, { useState } from "react";
import "./styles.css";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [batch, setbatch] = useState("");

  const collectData = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch("http://localhost:4000/", {
        method: "post",
        body: JSON.stringify({ name, email, age, batch }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.ok) {
        // Registration successful
        result = await result.json();
        localStorage.setItem("payment", JSON.stringify(result));
      } else {
        // Registration failed
        const errorResponse = await result.json();
        alert(errorResponse.message); // Display the error message to the user
      }
    } catch (error) {
      console.error(error);
      // Handle other errors as needed
    }
  };

  return (
    <div className="container">
      <form className="text-center pt-3" onSubmit={collectData}>
        <h1>Enter Details: </h1>
        <div className="mb-3 mt-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            required
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            name="age"
            required
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Batch:</label>
          <select
            name="batch"
            required
            className="form-control "
            value={batch}
            onChange={(e) => setbatch(e.target.value)}
          >
            <option value="">Select Batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
