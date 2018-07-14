import React from "react";
import UserContext from "../../context";

const Avatar = () => (
  <UserContext.Consumer>
    {function(context) {
      return <img className="avatar" src={context.data.avatar} alt="avatar" />;
    }}
  </UserContext.Consumer>
);

export default Avatar;
