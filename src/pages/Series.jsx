import React from "react";
import Requests from "../api/Request";
import { SingleCard } from "../components";
const Series = () => {
  return (
    <div>
      <div>
        <SingleCard getUrl={Requests.getDiscoverTv} />
      </div>
    </div>
  );
};

export default Series;
