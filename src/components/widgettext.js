import React from "react";

const widgettext = (props) => {
    
  return (
    <div>
      <div className="flex-container">
        <div className="widgetTitle">{props.title}</div>
        <div className="widgetValue">{props.value}</div>
        <div className="description">{props.description}</div>
      </div>
      
    </div>
    
  );
};

export default widgettext;
