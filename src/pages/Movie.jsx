import React from "react";
import Requests from "../api/Request";
import { Footer, Navbar, SingleCard } from "../components";

const Movie = () => {
  return (
    <div>
      <Navbar />
      <SingleCard getUrl={Requests.getDiscoverMovie} />
      <Footer />
    </div>
  );
};

export default Movie;
