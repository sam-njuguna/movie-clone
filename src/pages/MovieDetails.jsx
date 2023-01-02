import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Api from "../api/Api";
import { Api_key } from "../api/Request";
import styled from "styled-components";
import { T_image } from "../api/Images";
import { B_image } from "../api/Images";
import { S_image } from "../api/Images";
import { Navbar } from "../components";

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [vid, setVid] = useState();
  const [cast, setCast] = useState([]);
  const iframeRef = useRef(null);
  const background = `${B_image}${movie?.backdrop_path}`;
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const request = await Api.get(
        `/${params.type}/${params.id}?api_key=${Api_key}`
      );
      setMovie(request.data);
    };

    getData();
  }, [params.type, params.id]);

  useEffect(() => {
    const getCredit = async () => {
      const res = await Api.get(
        `/${params.type}/${params.id}/credits?api_key=${Api_key}`
      );
      setCast(res.data.cast.slice(0, 20));
    };
    getCredit();
  }, [params.type, params.id]);
  console.log(cast);
  useEffect(() => {
    const getVideo = async () => {
      const res = await Api.get(
        `/${params.type}/${params.id}/videos?api_key=${Api_key}`
      );
      setVid(res.data.results.slice(0, 3));
    };
    getVideo();
  }, [params.type, params.id]);

  return (
    <>
      <Navbar />
      <Container>
        <div className="main">
          <div className="detail">
            <div className="top">
              <div
                className="bg"
                style={{
                  backgroundSize: "cover",

                  backgroundPosition: "center center",
                  backgroundImage: `url(${background})`,
                }}
              ></div>
              <div className="footer"></div>
            </div>
            <div className="info">
              <div className="container ">
                <div className="header">
                  <img src={`${T_image}${movie?.poster_path}`} alt="" />
                </div>

                <div className="desc">
                  <h1 className="title">{movie?.name || movie?.title}</h1>
                  <h4 className="date">
                    {movie?.first_air_date || movie?.release_date}
                  </h4>

                  <p className="genre">
                    {movie?.genres &&
                      movie?.genres
                        .slice(0, 8)
                        .map((genres, i) => (
                          <span key={i}>{genres?.name}</span>
                        ))}
                  </p>
                  <div className="over">
                    <p>{movie?.overview}</p>
                  </div>
                  <div className="season">
                    {movie?.seasons &&
                      movie?.seasons.map((c, i) => (
                        <div className="sea" key={i}>
                          <p>{c?.name}</p>

                          <p>{c?.air_date}</p>
                        </div>
                      ))}
                  </div>
                  <div className="casts">
                    <h3 style={{ marginTop: "1rem" }}>Casts</h3>
                    <div className="casts__all">
                      {cast &&
                        cast.map((c, i) => (
                          <div className="casts__all__cast">
                            <img
                              src={
                                c?.profile_path
                                  ? `${S_image}${c.profile_path}`
                                  : unavailable
                              }
                              alt=""
                            />
                            <span key={i}>{c?.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" container videos">
            <h1>Trailers</h1>
            {vid &&
              vid.map((item, i) => (
                <div className="video" key={i}>
                  <div className="title">
                    <h3>{item.name}</h3>
                  </div>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.key}`}
                    ref={iframeRef}
                    frameborder="0"
                    width="100%"
                    margin="0 auto"
                    title="video"
                  />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  .main {
    display: flex;
    flex-direction: column;

    @media (max-width: 699px) {
      gap: 4rem;
    }
  }
  .detail {
    .top {
      position: relative;
      .bg {
        min-height: 100vh;
        object-fit: contain;
        position: relative;
        background-repeat: no-repeat;
        filter: brightness(30%);
        position: relative;
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
          rgba(15, 15, 15, 0.626),
          #131313
        );
        /* background-color: red; */
      }
    }
    .info {
      position: absolute;
      top: 0;
      padding-top: 2rem;

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        width: 80%;
        margin: 0 auto;
        @media (max-width: 699px) {
          flex-direction: column;
          gap: 0;
          .header {
            display: none;
          }
        }
        .desc {
          h1 {
            @media (max-width: 699px) {
              font-size: x-large;
            }
          }
          h4 {
            font-size: smaller;
            text-decoration: underline;
          }
          .genre {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            gap: 0.5rem;
            margin-top: 1rem;
            span {
              background-color: var(--bg);
              margin-bottom: 1rem;
              width: max-content;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              padding: 0.4rem 0.6rem;
              border-radius: 20px;
              font-size: smaller;
              font-weight: 800;
            }
          }
          .season {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            gap: 0.5rem;
            .sea {
              background-color: red;
              margin-top: 1rem;
              width: 90px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              p {
                font-size: smaller;
                font-weight: 600;
              }
            }
          }
          .casts {
            overflow: hidden;
            margin-top: 1rem;

            &__all {
              display: flex;
              overflow-y: hidden;
              overflow-x: scroll;
              scroll-behavior: smooth;
              margin-bottom: 1rem;
              gap: 0.5rem;
              padding-bottom: 1rem;
              width: 50vw;
              margin-top: 0.5rem;
              ::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 699px) {
                width: 96vw;
              }
              &__cast {
                display: flex;
                flex-direction: column;
                span {
                  text-align: center;
                  font-size: smaller;
                  font-weight: 600;
                }
                img {
                  height: 160px;
                  object-fit: contain;
                  @media (max-width: 699px) {
                    height: 130px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .videos {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 1rem;
    h1 {
      text-align: center;
      margin-bottom: 0.9rem;
    }
    @media (max-width: 699px) {
      width: 98%;
    }
    h3 {
      margin-bottom: 0.5rem;
    }
    iframe {
      height: 500px;
    }
  }
`;
export default MovieDetails;
