import { useState, useRef } from "react";
import styled from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import Signup from "./Signup";
import { auth } from "../hooks/firebaseConfig";
const Signin = () => {
  const [open, setOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignin = () => {
    setSign(!sign);
  };
  const handleOpen = (e) => {
    setOpen(!open);
    e.preventDefault();
  };
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <Container>
      {sign ? (
        <Signup />
      ) : (
        <div className="page">
          <h1>Sign In</h1>
          <form action="">
            <p>Email (personal or work)</p>
            <input
              className="in"
              type="text"
              placeholder="example@gmail.com"
              ref={emailRef}
            />
            <p>Password</p>
            <div className="pass">
              <input
                className="in"
                type={open === false ? "password" : "text"}
                placeholder="Password"
                ref={passwordRef}
              />
              <span onClick={handleOpen} className="eye">
                {open === false ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <button type="submit" onClick={login} className="top">
              Login
            </button>
            <p className="or"> or</p>
            <button type="submit" onClick={login}>
              <span> Sign in with Google</span> <FcGoogle />
            </button>
            <div className="up">
              <p>
                <span>Don't have an account?</span>
              </p>
              <p className="link" onClick={handleSignin}>
                Sign Up now
              </p>
            </div>
          </form>
        </div>
      )}
    </Container>
  );
};
const Container = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 900;
  }
  form {
    display: flex;
    flex-direction: column;

    padding-left: 0.2rem;
    background-color: #303030;
    height: 600px;
    width: 390px;
    padding: 5rem 1rem;
    border-radius: 0.4rem;
    @media (max-width: 699px) {
      width: 340px;
    }
    input {
      width: 100%;
      padding: 12px;
      border: none;
      font-size: 1rem;
      margin-bottom: 1rem;
      font-family: var(--monospace);
      border-radius: 2rem;
    }
    .pass {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      span {
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        color: var(--bg);
        font-size: x-large;
      }
    }
    .or {
      text-align: center;
    }
    p {
      font-size: smaller;
      font-weight: 500;
      margin-left: 0.5rem;
    }
    .top {
      margin-top: 1rem;
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
      border-radius: 2rem;
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
    .up {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      .link {
        transition: var(--trans);

        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
export default Signin;
