import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css"

const UpdateContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/update/${id}`,
        { name, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Contact update");
    } catch (error) {
      console.log(error);
      console.log("Contact Failed to update");
    }
  };

  return (
    <div>
      <h1>Update Contact</h1>
      <form onSubmit={handleUpdate} className="form">
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
        <input type="submit" value="Update Contact" />
      </form>
    </div>
  );
};

export default UpdateContact;
