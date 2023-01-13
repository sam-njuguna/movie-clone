import { useState } from "react";
import styled from "styled-components";
import { Main, Signin, Footer } from "../components";

import bg from "../assets/header-img.png";
const MainPage = () => {
  const [signIn, setSignIn] = useState(false);
  const handleSignin = () => {
    setSignIn(!signIn);
  };
  return (
    <>
      <Container>
        <img src={bg} alt="" />
        <div className="main ">
          <div className="home">
            <div className="logo">
              <h1>S</h1>
              <h4>Trailers</h4>
            </div>
            <button className="btn login-btn" onClick={handleSignin}>
              Sign In
            </button>
          </div>
          <div className="login">
            {signIn ? (
              <Signin />
            ) : (
              <div className="details">
                <h1>Unlimited Trailer of Movies,Tv Series and more.</h1>
                <h3>Watch anywhere,cancel any time.</h3>
                <h4>Ready to watch? create or restart your membership</h4>
                <div className="l-input">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button className="l-btn btn" onClick={handleSignin}>
                      Get Started
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      <Main />
      <Footer />
    </>
  );
};
const Container = styled.div`
  img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    width: 100%;

    min-height: 105vh;
    position: relative;
    filter: brightness(20%);
    position: relative;
    /* @media (max-width: 699px) {
      height: 120vh;
    } */
  }
  .main {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    .home {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 1rem;
      .logo {
        color: #b40202;
        @media (max-width: 699px) {
          text-align: center;
        }
        h1 {
          font-weight: 900;
          font-size: 2.5rem;
          margin-left: 1rem;
          @media (max-width: 699px) {
            margin-left: 0;
          }
        }
        h4 {
          margin-top: -0.9rem;
        }
      }
      button {
        width: max-content;
        padding: 10px;
        font-size: medium;
        font-weight: 700;
        border: none;
        background-color: var(--btn);
        color: var(--text);
        transition: var(--trans);
        &:hover {
          box-shadow: var(--btn-s);
        }
        @media (max-width: 699px) {
          padding: 10px;
          font-size: small;
        }
      }

      @media (min-width: 700px) {
        padding: 1rem 6rem;
      }
    }
    .login {
      padding-top: 3rem;
      min-height: 50vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
      .details {
        text-align: center;
        margin: 1rem;
        h1 {
          @media (max-width: 699px) {
            font-size: x-large;
          }
        }
        h3 {
          @media (max-width: 699px) {
            font-size: smaller;
          }
        }
        form {
          width: 100%;
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          input {
            padding: 10px;
            border: none;
            font-size: 1rem;
            @media (max-width: 699px) {
              padding: 8px;
            }
          }
          p {
            margin-left: 0.5rem;
          }

          button {
            width: max-content;
            padding: 10px;
            font-size: medium;
            align-items: center;
            font-weight: 700;
            border: none;
            background-color: var(--btn);
            color: var(--text);
            transition: var(--trans);
            &:hover {
              box-shadow: var(--btn-s);
            }

            @media (max-width: 699px) {
              padding: 10px;
              font-size: small;
            }
          }
        }
      }
    }
  }
`;
export default MainPage;
