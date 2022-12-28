import React from "react";
import Banner from "../components/Banner";
import Requests from "../api/Request";
import { Card } from "../components";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Card
        title="Upcoming Movies"
        getUrl={Requests.getUpcoming}
        link="/movie"
      />
      <Card
        title="Popular Movies"
        getUrl={Requests.getPopularMovies}
        link="/movie"
      />
      <Card title="On Air  Series" getUrl={Requests.getOnAir} link="/tv" />
      <Card title="Popular Series" getUrl={Requests.getPopularTv} link="/tv" />
    </div>
  );
};

export default Home;
