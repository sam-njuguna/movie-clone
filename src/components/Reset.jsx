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
    form {
      input {
        /* width: 100%; */
        padding: 12px;
        margin-bottom: 1rem;
        font-size: medium;
        @media (max-width: 699px) {
          font-size: medium;
        }
      }
    }
  }
`;
export default Reset;
