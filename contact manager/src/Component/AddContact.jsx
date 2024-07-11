import React, { useState } from "react";
import axios from "axios";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(
        "http://localhost:5000/addcontact",
        { name, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("data send");
      setEmail("");
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};

export default AddContact;
