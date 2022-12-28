import { useState, useEffect } from "react";
import styled from "styled-components";
import fea from "../assets/feature-1.png";
import Api from "../api/Api";
import { B_image } from "../api/Images";
import Requests from "../api/Request";
const Main = () => {
  const [movie, setMovie] = useState([]);

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
  console.log(movie);
  return (
    <Container>
      <div className="desc">
        <div className="desc__detail container">
          <div className="details">
            <h1>Enjoy on your Tv</h1>
            <p>Watch on smart Tvs,PlayStore,Xbox,Chromecast and more.</p>
          </div>
          <img src={fea} alt="" />
        </div>
        <div className="desc__detail container">
          <img src={`${B_image}${movie?.backdrop_path}`} alt="" />
          <div className="details">
            <h4>{movie.media_type === "tv" ? "Series" : "Movie"}</h4>
            <h2>{movie.title || movie.name}</h2>
            <h1>Watch everywhere.</h1>
            <p>
              Stream unlimited movie and Tv show traiker on your
              phone,tablet,laptop and tv.
            </p>
          </div>
        </div>
        <div className="main container">
          <h1>Frequently Asked Questions</h1>
          <ul>
            <div className="data">
              <input type="radio" name="main" id="first" />
              <label htmlFor="first">What is s-trailer?</label>
              <div className="content">
                <p>
                  S-Trailer is a popular movie streaming site that allows users
                  to watch a wide variety of films, including popular releases
                  and classic movies. With a user-friendly interface and a large
                  selection of genres, S-Trailer makes it easy for users to find
                  and enjoy their favorite films. The site also features
                  high-quality video and sound, ensuring a top-notch viewing
                  experience. Whether you're a film enthusiast or just looking
                  for a fun way to spend an evening, S-Trailer is a great choice
                  for movie streaming.
                </p>
              </div>
            </div>
            <div className="data">
              <input type="radio" name="main" id="second" />
              <label htmlFor="second">What can I watch in s-trailer?</label>
              <div className="content">
                <p>
                  S-Trailer offers a wide variety of films to choose from,
                  including popular releases, classic movies, and independent
                  films. Users can browse through different genres, such as
                  action, comedy, drama, horror, and more, to find films that
                  match their interests. S-Trailer also features a selection of
                  TV shows and documentaries for users to watch. Some of the
                  popular films that can be found on S-Trailer include The
                  Godfather, The Shawshank Redemption, Pulp Fiction, and The
                  Dark Knight. The site is constantly updating its selection, so
                  there is always something new to discover.
                </p>
              </div>
            </div>
            <div className="data">
              <input type="radio" name="main" id="third" />
              <label htmlFor="third">How does it work?</label>
              <div className="content">
                <p>
                  To use S-Trailer, users must first create an account and
                  choose a subscription plan. Once the account is set up, users
                  can browse the site's selection of movies and select a film to
                  watch. The movie will then begin streaming on the user's
                  device, allowing them to watch it in high-definition with no
                  interruptions. Users can also create playlists of their
                  favorite movies and TV shows to easily access them in the
                  future. S-Trailer also offers recommendations based on a
                  user's viewing history to help them discover new films to
                  enjoy.
                </p>
              </div>
            </div>
            <div className="data">
              <input type="radio" name="main" id="fourth" />
              <label htmlFor="fourth">How can I cancle?</label>
              <div className="content">
                <p>
                  To cancel your S-Trailer subscription, you can follow these
                  steps:
                </p>
                <p>
                  <span>1: </span>Log into your S-Trailer account and go to the
                  "Account" section.
                </p>
                <p>
                  <span>2: </span>
                  Scroll down and click on the "Cancel Membership" button.
                </p>
                <p>
                  <span>3: </span>Follow the prompts to confirm your
                  cancellation.
                </p>
                <p>
                  If you are unable to cancel your subscription online, you can
                  also contact S-Trailer's customer service team for assistance.
                  They will be able to help you cancel your account and answer
                  any questions you may have. Please note that you will continue
                  to have access to the service until the end of your current
                  billing period.
                </p>
              </div>
            </div>
            <div className="data">
              <input type="radio" name="main" id="fifth" />
              <label htmlFor="fifth">How to be come a member?</label>
              <div className="content">
                <p>To become a member of S-Trailer, follow these steps:</p>
                <p>
                  <span>1: </span>Go to the S-Trailer website and click on the
                  "Sign Up" button in the top right corner of the page.
                </p>
                <p>
                  <span>2: </span>Enter your email address and create a
                  password.
                </p>
                <p>
                  <span>3: </span>Choose a subscription plan that best fits your
                  needs.
                </p>
                <p>
                  <span>4: </span>Enter your payment information to complete the
                  process.
                </p>
                <p>
                  Once you have completed these steps, you will be a member of
                  S-Trailer and can begin accessing the site's wide selection of
                  movies and TV shows. You will also be able to use features
                  such as creating playlists and receiving recommendations based
                  on your viewing history.
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .main {
    margin: 60px auto;
    width: 100%;
    max-width: 750px;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      margin-bottom: 2rem;
      @media (max-width: 699px) {
        font-size: x-large;
      }
    }
    ul {
      width: 100%;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      gap: 0.5rem;
      .data {
        display: flex;
        flex-direction: column;
        text-align: center;
        label {
          display: flex;
          align-items: center;
          padding: 15px;
          font-size: 1rem;
          background-color: #303030;
          margin-bottom: 2px;
          cursor: pointer;
          position: relative;
          &::after {
            content: "+";
            position: absolute;
            right: 20px;
            font-size: 1.5rem;
            font-weight: 900;
          }
        }
        input[type="radio"] {
          display: none;
        }
        .content {
          background-color: #303030;
          text-align: left;
          padding: 0 15px;
          max-height: 0;
          overflow: hidden;
          p {
            margin: 0.2rem 0;
          }
          span {
            color: #fff;
            font-size: 1.1rem;
            font-weight: 500;
          }
        }
      }
    }
    ul input[type="radio"]:checked + label + .content {
      padding: 20px 15px;
      max-height: 600px;
    }
  }
  .desc {
    &__detail {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 4px solid #313131;

      padding-bottom: 50px;
      padding-top: 50px;
      gap: 3rem;

      img {
        width: 600px;

        object-fit: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      @media (max-width: 699px) {
        flex-direction: column;
        img {
          width: 320px;
          height: 400px;
          object-fit: cover;
          background-position: center;
        }
      }

      .details {
        h2 {
          color: var(--btn);
        }
        @media (max-width: 699px) {
          h2 {
            font-size: larger;
          }
          h1 {
            font-size: x-large;
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
export default Main;
