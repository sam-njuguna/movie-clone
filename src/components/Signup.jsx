import { useState, useRef } from "react";
import styled from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import Signin from "./Signin";
import { auth } from "../hooks/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
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
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      // .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  };
  return (
    <Container>
      {sign ? (
        <Signin />
      ) : (
        <div className="page">
          <h1>Sign Up</h1>
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
            <p>Confirm Password</p>
            <div className="pass">
              <input
                className="in"
                type={open === false ? "password" : "text"}
                placeholder="Confirm Password"
                ref={passwordRef}
              />
              <span onClick={handleOpen} className="eye">
                {open === false ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <button type="submit" onClick={register} className="top">
              Login
            </button>
            <p className="or"> or</p>
            <button onClick={signInWithGoogle}>
              <span> Sign in with Google</span> <FcGoogle />
            </button>
            <div className="up">
              <p>
                <span> Have an account?</span>
              </p>
              <p className="link" onClick={handleSignin}>
                Sign In
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
export default Signup;
