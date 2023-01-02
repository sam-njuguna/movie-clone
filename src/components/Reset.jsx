import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { auth } from "../hooks/firebaseConfig";
const Reset = () => {
  const [email, setEmail] = useState("");
  const triggerResetEmail = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
  };

  return (
    <Conatiner>
      <div className="form">
        <h2>Reset password</h2>
        <form action="">
          <input
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <button type="submit" onClick={triggerResetEmail}>
            Reset
          </button>
        </form>
      </div>
    </Conatiner>
  );
};
const Conatiner = styled.div`
  .form {
    background-color: var(--bg);
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 900;
      @media (max-width: 699px) {
        font-size: 1.5rem;
      }
    }
    form {
      input {
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
    }
  }
`;
export default Reset;
