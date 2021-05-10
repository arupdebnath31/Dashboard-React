import React from "react";
import reactDom from "react-dom";
import { component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import { Col, Row, Container } from "react-bootstrap";
import Widgettext from "./widgettext";
import Loader from "./Loader";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("Response of data =======", data);
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error: ===", error);
    }
  };

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    getUser();
  }, []);

  console.log("Users: ==== ", users);
  return (
    <div className="dashboard">
      {loading ? (
        <Loader />
      ) : (
        users &&
        users.map((user, index) => (
          <Widgettext
            key={index}
            title={user.name}
            value="258"
            description="demo Description text is come here "
          />
        ))
      )}
    </div>
  );
}

export default Dashboard;
