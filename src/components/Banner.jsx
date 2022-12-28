import React, { useEffect, useState } from "react";
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

  return (
    <Container>
      <div
        className="bg"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${background})`,
          width: "100%",
        }}
      ></div>
      <div className="main ">
        <div className="main__data container">
          <h2>{movie.media_type === "tv" ? "Series" : "Movie"}</h2>
          <h1>{movie.title || movie.name}</h1>
          <h4>
            Rated <span>{movie.vote_average}</span>
            <h5>{movie.release_date}</h5>
          </h4>

          <p>{movie.overview}</p>
          <button>
            <a href={`/movie/${movie.id}`}>View Movie</a>
          </button>
        </div>
      </div>
      <div className="footer"></div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 5rem;
  .bg {
    min-height: 80vh;
    object-fit: cover;
    position: relative;
    background-repeat: no-repeat;
    filter: brightness(30%);
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
      justify-content: center;
      align-items: center;
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
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.8rem;
        span {
          width: 60px;
          height: 60px;
          justify-content: center;
          align-items: center;
          background-color: var(--btn);
          box-shadow: var(--btn-s);
          display: flex;
          font-size: small;
          border-radius: 50%;
        }
        h5 {
          margin-left: 2rem;
          text-decoration: underline;
        }
      }
      p {
        width: 60%;
        margin: auto;
        @media (max-width: 699px) {
          width: 100%;
        }
      }
    }
    .footer {
      height: 10rem;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.626),
        #111111
      );
    }
  }
`;
export default Banner;
