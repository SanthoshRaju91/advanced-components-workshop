import React from "react";
import Repo from "./repo";
import UserContext from "../../context";

const Repositories = props => (
  <div className="section repositories">
    <UserContext.Consumer>
      {function(context) {
        return (
          <div>
            {context.data.repos.map(repo => (
              <Repo
                key={repo.name}
                name={repo.name}
                stars={repo.stars}
                description={repo.description}
                url={repo.url}
              />
            ))}
          </div>
        );
      }}
    </UserContext.Consumer>
  </div>
);

export default Repositories;
