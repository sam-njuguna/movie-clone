import React from "react";
import Requests from "../api/Request";
import { Footer, Navbar, SingleCard } from "../components";
const Series = () => {
  return (
    <div>
      <div>
        <Navbar />
        <SingleCard getUrl={Requests.getDiscoverTv} />
        <Footer />
      </div>
    </div>
  );
};

export default Series;
