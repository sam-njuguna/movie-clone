import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectUser } from "../features/userSlice";
import { auth } from "../hooks/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
const plans = [
  {
    quality: "4k + HDR",
    name: "Premium",
  },
  {
    quality: "1080p",
    name: "Basic",
  },

  {
    quality: "720p",
    name: "Standard",
  },
];
const Profile = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container>
        <div className="profile container">
          <div className="all">
            <h2>Edit Profile</h2>
            <div className="info">
              <div className="info__icon">
                <CgProfile />
              </div>
              <div className="info__details">
                <h4>{user.email}</h4>
                <div className="plans">
                  <h3>Plans</h3>
                  <div className="screen-plan">
                    {plans.map((plan, i) => (
                      <div className="info" key={i}>
                        <div className="info-detail">
                          <h5>{plan.name}</h5>
                          <p>{plan.quality}</p>
                        </div>
                        <button>Subscribe</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => signOut(auth, navigate("/"))}>
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
const Container = styled.div`
  .profile {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    .all {
      display: flex;
      flex-direction: column;
      .info {
        display: flex;
        justify-content: space-between;
        gap: 0.9rem;
        width: 30vw;

        @media (max-width: 699px) {
          width: 70vw;
        }
        &__icon {
          font-size: 2rem;
        }
        &__details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          h4 {
            background-color: #313131;
            height: 40px;
            display: flex;
            align-items: center;
            padding: 0.5rem;
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
            margin-top: 2rem;
            background-color: var(--btn);
            color: var(--text);
            transition: var(--trans);
            &:hover {
              box-shadow: var(--btn-s);
            }
          }
          .plans {
            display: flex;
            flex-direction: column;
            margin-top: 0.5rem;
            .screen-plan {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                h5 {
                  font-weight: 900;
                }
                p {
                  font-size: smaller;
                }
              }

              button {
                width: max-content;
                padding: 10px;
                font-size: smaller;
                display: flex;
                justify-content: center;
                gap: 1rem;
                font-weight: 700;
                border: none;
                margin-top: 0;
                background-color: var(--btn);
                color: var(--text);
                transition: var(--trans);
                &:hover {
                  box-shadow: var(--btn-s);
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default Profile;
