import { useState, useRef } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { auth, provider } from "../hooks/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import Signin from "./Signin";
import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";

const Signup = () => {
  const [signIn, setSignIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSignin = () => {
    setSignIn(true);
  };

  const signWithGoogle = () => {
    signInWithRedirect(auth, provider)
      .then(() => {})
      .catch(() => {});
  };
  const Register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {})
      .catch(() => {});
  };
  return (
    <Container>
      {signIn ? (
        <Signin />
      ) : (
        <div className="form">
          <h2>Create account</h2>
          <form action="">
            <div className="input">
              <label htmlFor="">Email (personal or work)</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                required
                ref={emailRef}
              />
              <label htmlFor="">password</label>
              <div className="pass">
                <input
                  type={isOpen === false ? "password" : "text"}
                  placeholder="Enter password"
                  ref={passwordRef}
                  required
                />
                <span onClick={handleOpen} className="eye">
                  {isOpen === false ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
                <input
                  type={isOpen === false ? "password" : "text"}
                  placeholder="Confirm password"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              style={{ marginTop: " 1rem" }}
              onClick={Register}
            >
              Sign up
            </button>
          </form>
          <p className="or"> or</p>
          <button onClick={signWithGoogle}>
            <FcGoogle /> <span> Sign in with Google </span>
          </button>
          <div className="up">
            <p>
              <span> Have an account?</span>
            </p>
            <p className="link" onClick={handleSignin}>
              Sign In
            </p>
          </div>
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
      @media (max-width: 699px) {
        font-size: 1.5rem;
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
    button {
      width: 100%;
      padding: 10px;
      font-size: smaller;
      display: flex;
      justify-content: center;
      text-align: center;
      gap: 1rem;
      font-weight: 700;
      border: none;
      cursor: pointer;
      background-color: var(--btn);
      color: var(--text);
      transition: var(--trans);
      &:hover {
        box-shadow: var(--btn-s);
      }
      svg {
        font-size: 1.5rem;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 20vw;
      @media (max-width: 999px) {
        width: 85vw;
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
          padding: 10px;
          margin-bottom: 1rem;
          font-size: medium;
          background-color: transparent;
          border: 2px solid #313131;
          color: var(--text);
          border-radius: none;
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
            font-size: 1.2rem;
            color: var(--text);
            cursor: pointer;
          }
        }
      }
    }
  }
`;
export default Signup;
