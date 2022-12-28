import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Api from "../api/Api";
import { S_image } from "../api/Images";

const Card = ({ title, getUrl, link }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const request = await Api.get(getUrl);
      setMovie(request.data.results);
    };
    getData();
  }, [getUrl]);
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function cut(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "" : str;
  }
  return (
    <Conatiner>
      <div className="main container">
        <div className="header">
          <h1>{title}</h1>
          <Link to={`/${link}`}>Load more</Link>
        </div>
        <div className="main__data ">
          {movie.map((movie, index) => {
            return (
              <div key={index} className="deatils">
                <img src={`${S_image}${movie.poster_path}`} alt="" />
                <div className="desc">
                  <p>{truncate(`${movie.title || movie.name}`, 15)}</p>
                </div>
                <p className="date">
                  {cut(`${movie.first_air_date || movie.release_date}`, 5)}
                </p>
                <div className="rate">
                  <span>{movie.vote_average}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  .main {
    padding-top: 0;
    .header {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        margin-left: 2rem;
      }
    }

    &__data {
      display: flex;
      overflow-y: hidden;
      overflow-x: scroll;
      scroll-behavior: smooth;
      margin-bottom: 1rem;
      gap: 0.5rem;
      padding-bottom: 1rem;
      ::-webkit-scrollbar {
        display: none;
      }
      .deatils {
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        position: relative;

        img {
          width: 200px;
          object-fit: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          border-radius: 0.2rem;
          @media (max-width: 699px) {
            width: 160px;
          }
        }
        .desc {
          position: absolute;
          z-index: 999;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          height: 5vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0.5rem;
          background-color: #000000b2;
          border-bottom-left-radius: 0.2rem;
          border-bottom-right-radius: 0.2rem;

          p {
            font-size: medium;
            @media (max-width: 699px) {
              font-size: smaller;
            }
          }
        }
        .date {
          font-size: small;
          font-weight: 900;
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
        }
        .rate {
          position: absolute;
          z-index: 999;
          top: 0.2rem;
          right: 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          span {
            width: 40px;
            height: 20px;
            justify-content: center;
            align-items: center;
            background-color: green;

            display: flex;
            font-size: small;
          }
        }
      }
    }
  }
`;
export default Card;
