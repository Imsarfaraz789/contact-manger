import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ContactList from "./ContactList";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        <h1>Contact manager</h1>
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Contact here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/add">Add New Contact</Link>
        </div>
        <ContactList data={search} />
      </div>
    </div>
  );
};

export default Home;
