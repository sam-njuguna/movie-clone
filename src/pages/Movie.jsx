import React from "react";
import Requests from "../api/Request";
import { SingleCard } from "../components";

const Movie = () => {
  return (
    <div>
      <SingleCard getUrl={Requests.getDiscoverMovie} />
    </div>
  );
};

export default Movie;
