import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import Signup from "./Signup";

const Signin = () => {
  const [signIn, setSignIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSignup = () => {
    setSignIn(!isOpen);
  };
  return (
    <Container>
      {signIn ? (
        <Signup />
      ) : (
        <div className="form">
          <h2>Sign In</h2>
          <form action="">
            <div className="input">
              <label htmlFor="">Email (personal or work)</label>
              <input type="email" placeholder="example@gmail.com" required />
              <label htmlFor="">password</label>
              <div className="pass">
                <input
                  type={isOpen === false ? "password" : "text"}
                  placeholder="Enter password"
                  className="pass"
                  required
                />
                <span onClick={handleOpen} className="eye">
                  {isOpen === false ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>
            <button type="submit" style={{ marginTop: " 1rem" }}>
              Login
            </button>
            <p className="or"> or</p>
            <button>
              <span> Sign in with Google</span> <FcGoogle />
            </button>
            <div className="up">
              <p>
                <span>Dont have an account !</span>
              </p>
              <p className="link" onClick={handleSignup}>
                create one?
              </p>
            </div>
          </form>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  .form {
    background-color: var(--bg);
    padding: 2rem 0.8rem;
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 900;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 20vw;
      @media (max-width: 999px) {
        /* width: 100vw; */
        width: 95vw;
        @media (min-width: 700px) {
          width: 50vw;
        }
      }
      .input {
        display: flex;
        flex-direction: column;
        label {
          font-size: smaller;
          font-weight: 700;
          margin-left: 0.2rem;
        }
        input {
          /* width: 100%; */
          padding: 12px;
          margin-bottom: 1rem;
          font-size: medium;
          @media (max-width: 699px) {
            font-size: medium;
          }
        }
        .pass {
          position: relative;
          input {
            width: 100%;
          }
          span {
            position: absolute;
            content: "";
            top: 0.6rem;
            right: 1rem;
            font-size: 1.1rem;
            color: var(--bg);
            cursor: pointer;
          }
        }
      }
      button {
        width: 100%;
        padding: 15px;
        font-size: medium;
        display: flex;
        justify-content: center;
        gap: 1rem;
        font-weight: 700;
        border: none;
        background-color: transparent;
        background-color: var(--btn);
        color: var(--text);
        transition: var(--trans);
        &:hover {
          box-shadow: var(--btn-s);
        }
        svg {
          font-size: 1.2rem;
        }
      }
      p {
        text-align: center;
        margin: 0.5rem 0;
      }
      .link {
        text-decoration: underline;
        cursor: pointer;
        font-size: smaller;
      }
    }
  }
`;
export default Signin;
