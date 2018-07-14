import React from "react";
import Avatar from "./avatar";
import Description from "./description";
import Name from "./name";

const UserInfo = props => (
  <div className="section user-info">
    <Avatar />
    <Name />
    <Description />
  </div>
);

export default UserInfo;
