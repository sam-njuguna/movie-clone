import { useState, useEffect } from "react";
import styled from "styled-components";
import { S_image } from "../api/Images";
import Api from "../api/Api";
import More from "./More";
import Genres from "./Genres";
import useGenre from "../hooks/useGenres";
import Requests from "../api/Request";
const SingleCard = ({ getUrl }) => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [numPages, setnumPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  useEffect(() => {
    const getMovie = async () => {
      const res = await Api.get(
        `${getUrl}&page=${page}&with_genres=${genreforURL}`
      );

      setMovie(res.data.results);
      setnumPages(res.data.total_pages);
    };
    getMovie();
  }, [getUrl, page, genreforURL]);
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <Genres
        get_Url={Requests.getMovieGenre}
        setPage={setPage}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <Container>
        <div className="main  container">
          <div className="main__data ">
            {movie.map((movie, index) => {
              return (
                <div key={index} className="details">
                  <img src={`${S_image}${movie.poster_path}`} alt="" />
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
              );
            })}
          </div>
        </div>
      </Container>
      {numPages > 1 && <More setPage={setPage} numPages={numPages} />}
    </div>
  );
};
const Container = styled.div`
  min-height: 90vh;
  /* padding: 2rem 0; */

  .main {
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
          /* background-color: #222121dd; */
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
export default SingleCard;
