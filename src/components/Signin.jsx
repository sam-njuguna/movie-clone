import { useState, useRef } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { auth, provider } from "../hooks/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import Signup from "./Signup";
import { signInWithPopup } from "firebase/auth";
import Reset from "./Reset";

const Signin = () => {
  const [signIn, setSignIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSignup = () => {
    setSignIn(!isOpen);
  };
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(e);
      });
  };
  const Login = (e) => {
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
      {signIn ? (
        <Signup />
      ) : forgetPassword ? (
        <Reset />
      ) : (
        <div className="form">
          <h2>Sign In</h2>
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
                  className="pass"
                  ref={passwordRef}
                  required
                />
                <span onClick={handleOpen} className="eye">
                  {isOpen === false ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>
            <button
              type="submit"
              style={{ marginTop: " 1rem" }}
              onClick={Login}
            >
              Login
            </button>
          </form>
          <p className="or"> or</p>
          <button onClick={signWithGoogle}>
            <span> Sign in with Google</span> <FcGoogle />
          </button>
          <div className="up">
            <p>
              <span>Dont have an account !</span>
            </p>
            <div className="btn">
              <p className="link" onClick={handleSignup}>
                create one?
              </p>
              <p
                onClick={() => {
                  setForgetPassword(true);
                  setSignIn(false);
                }}
              >
                Forgot password?
              </p>
            </div>
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

    .btn {
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      p {
        text-align: center;
        text-decoration: underline;
        cursor: pointer;
        font-size: smaller;
      }
    }
    button {
      width: 100%;
      padding: 10px;
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
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 20vw;
      @media (max-width: 999px) {
        /* width: 100vw; */
        width: 88vw;
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
          /* background-color: var(--text); */
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
            font-size: 1.1rem;
            color: var(--bg);
            cursor: pointer;
          }
        }
      }
    }
  }
`;
export default Signin;
