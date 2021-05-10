import React from "react";
import { Spinner } from "react-bootstrap";


const Loader = () => {
  return (
    
      <Spinner animation="border" role="status" variant="primary" style={{width: "100px" , height: "100px" , border: "10px solid blue" }}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    
  );
};

export default Loader;
