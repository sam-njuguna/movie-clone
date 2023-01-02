import { S_image } from "../api/Images";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const SearchCard = ({ movie }) => {
  const navigate = useNavigate();
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const handleNavigate = (type, id) => {
    navigate(`/details/${type}/${id}`);
    window.scroll(0, 0);
  };
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Container>
      <div className="main container">
        {!movie?.length && <h3>No movies available</h3>}
        <div className="main__data">
          {movie.map((movie, index) => (
            <div
              className="details"
              key={index}
              onClick={() =>
                handleNavigate(movie.first_air_date ? "tv" : "movie", movie.id)
              }
            >
              <img
                src={
                  movie?.poster_path
                    ? `${S_image}${movie.poster_path}`
                    : unavailable
                }
                alt=""
              />
              <div className="desc">
                <p>{truncate(`${movie.title || movie.name}`, 15)}</p>
              </div>
              <p className="date">
                {movie.first_air_date || movie.release_date}
              </p>
              <div className="rate">
                <span>{movie.vote_average}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  min-height: 90vh;

  .main {
    h3 {
      text-align: center;
    }
    &__data {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      gap: 1rem;
      @media (max-width: 699px) {
        gap: 0.4rem;
      }
      .details {
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        position: relative;
        @media (max-width: 699px) {
          width: 160px;
        }
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
          top: 0.1rem;
          right: 0.1rem;
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
export default SearchCard;
