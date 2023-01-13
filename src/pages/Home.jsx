import React from "react";
import Banner from "../components/Banner";
import Requests from "../api/Request";
import { Card, Footer } from "../components";
import { Navbar } from "../components";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Card
        title="Trending Movies"
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
      <Footer />
    </div>
  );
};

export default Home;
