import React from "react";
import UserContext from "../../context";

const Description = () => (
  <UserContext.Consumer>
    {function(context) {
      return <div className="description">{context.data.description}</div>;
    }}
  </UserContext.Consumer>
);

export default Description;
