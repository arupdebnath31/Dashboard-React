// eslint-disable-next-line
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./dashboard";

function Datafetching() {
    // Store the users in a state variable.
  // We are passing an empty array as the default value.
  let [users, setUsers] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data));
  }, []);

  return (
    <div className="App">
      {/* <h2>The JSON below is loaded from an external API!</h2>
      <code>{JSON.stringify(users)}</code> */}
      {/* <Dashboard mail = {users[0].email} /> */}
    </div>
  );
}

export default Datafetching;
