import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Api from "../api/Api";
import { B_image } from "../api/Images";
import Requests from "../api/Request";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const background = `${B_image}${movie?.backdrop_path}`;
  useEffect(() => {
    const getMovie = async () => {
      const request = await Api.get(Requests.getTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    getMovie();
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (type, id) => {
    navigate(`/details/${type}/${id}`);
    window.scroll(0, 0);
  };
  return (
    <Container>
      <div className="top">
        <div
          className="bg"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url(${background})`,
            width: "100%",
          }}
        ></div>
        <div className="footer"></div>
      </div>
      <div className="main ">
        <div className="main__data container">
          <h2>{movie.media_type === "tv" ? "Series" : "Movie"}</h2>
          <h1>{movie.title || movie.name}</h1>
          <h4>
            Rated <span>{movie.vote_average}</span>
            <h5>{movie.release_date}</h5>
          </h4>

          <p>{movie.overview}</p>
          <button
            onClick={() =>
              handleNavigate(movie.first_air_date ? "tv" : "movie", movie.id)
            }
          >
            <a href="">Watch Movie</a>
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 5rem;
  .top {
    .bg {
      min-height: 90vh;
      object-fit: cover;
      position: relative;
      background-repeat: no-repeat;
      filter: brightness(30%);
      position: relative;
    }
    .footer {
      height: 12rem;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(
        180deg,
        transparent,
        rgba(15, 15, 15, 0.626),
        #131313
      );
      /* background-color: red; */
    }
  }
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: start;
    &__data {
      display: flex;
      flex-direction: column;
      /* justify-content: center;
      align-items: center; */
      width: 60%;
      @media (max-width: 699px) {
        width: 98%;
      }
      h2 {
        text-decoration: underline;
      }
      h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        @media (max-width: 699px) {
          font-size: 1.5rem;
        }
      }

      h4 {
        display: flex;

        gap: 0.5rem;
        margin-bottom: 1.8rem;
        span {
          width: 40px;
          height: 20px;
          padding: 0.2rem;
          justify-content: center;
          align-items: center;
          background-color: green;

          display: flex;
          font-size: small;
        }
        h5 {
          margin-left: 2rem;
          text-decoration: underline;
        }
      }
      button {
        margin-top: 2rem;
        width: max-content;
        padding: 10px;
        font-size: medium;
        display: flex;
        justify-content: center;
        gap: 1rem;
        font-weight: 700;
        border: none;

        background-color: var(--btn);
        transition: var(--trans);
        a {
          color: var(--text);
        }
        &:hover {
          box-shadow: var(--btn-s);
        }
      }
      p {
        width: 100%;
        margin: auto;
        @media (max-width: 699px) {
        }
      }
    }
  }
`;
export default Banner;
