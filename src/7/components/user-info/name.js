import React from "react";
import UserContext from "../../context";

const Name = props => (
  <UserContext.Consumer>
    {function(context) {
      return (
        <a className="name" href={context.data.url}>
          {context.data.name}
        </a>
      );
    }}
  </UserContext.Consumer>
);

export default Name;
