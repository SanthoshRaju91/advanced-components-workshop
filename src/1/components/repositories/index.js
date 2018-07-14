import React from "react";
import Repo from "./repo";

function renderRepo(repo, index) {
  return (
    <Repo
      key={repo.name}
      name={repo.name}
      stars={repo.stars}
      description={repo.description}
      url={repo.url}
    />
  );
}

const Repositories = props => (
  <div className="section repositories">{props.repos.map(renderRepo)}</div>
);

export default Repositories;
