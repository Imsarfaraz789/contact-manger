import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/listcontact");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteContact/${id}`);
      console.log("deleted");
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
      console.log("Not deleted");
    }
  };
  return (
    <>
      {data
        .filter((contact) => {
          return contact.name
            .toLocaleLowerCase()
            .includes(props.data.toLocaleLowerCase());
        })
        .map((item, index) => {
          return (
            <div key={index} className="contactlist">
              <div>
                <div style={{ fontSize: "24px" }}>{item.name}</div>
                <div style={{ fontSize: "12px" }}>{item.email}</div>
              </div>
              <div className="icons">
                <div>
                  <Link to={`/update/${item._id}`}>
                    <FaEdit style={{ fontSize: "20px", color: "#fff" }} />
                  </Link>
                </div>
                <div>
                  <Link>
                    <AiFillDelete
                      style={{ fontSize: "20px", color: "#fff" }}
                      onClick={() => handleDelete(item._id)}
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      <div>{props.data}</div>
    </>
  );
};

export default ContactList;
