import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="main">
          <div className="left">
            <div className="logo">
              <h1>S</h1>
              <h4>Trailers</h4>
            </div>
            <p>Welcome to home of Trailers.</p>
          </div>
          <div className="right">
            <ul className="links">
              <li>
                <Link to="/search" onClick={() => window.scroll(0, 0)}>
                  Search
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => window.scroll(0, 0)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movie" onClick={() => window.scroll(0, 0)}>
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/tv" onClick={() => window.scroll(0, 0)}>
                  Series
                </Link>
              </li>
            </ul>
            <div className="info">
              <h2>Get in touch </h2>
              <div className="all">
                <div className="social">
                  <a
                    href="https://www.linkedin.com/in/samson-njuguna-896a02243/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/sam-njuguna"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="email">
                  <p>sam.x.njuguna@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="copy">
          &copy; 2022 All Rights Reserved.Design and Created by
          <span> Samson Njuguna</span> .{" "}
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  background-color: #050505;
  margin-top: 5rem;
  font-size: 0.9rem;
  padding: 1rem;
  .copy {
    margin-top: 0.5rem;
    padding: 0.5rem;
    text-align: center;
    border-top: 1px solid #464545;
    font-size: small;
    span {
      color: #b40202;
    }
  }
  .footer {
    width: 85%;
    margin: 0 auto;
    @media (max-width: 699px) {
      width: 95%;
      margin: 0 auto;
    }
    .main {
      display: flex;
      align-items: center;

      justify-content: space-between;
      @media (max-width: 699px) {
        flex-direction: column;
      }
      .left {
        .logo {
          color: #b40202;
          margin-bottom: 1rem;
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
        p {
          @media (max-width: 699px) {
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5rem;
        @media (max-width: 699px) {
          gap: 2rem;
        }
        ul {
          margin-top: 1.5rem;
          li {
            margin-bottom: 0.5rem;
          }
          a {
            color: white;
            font-weight: 600;
            font-size: smaller;
            &:hover {
              color: #b40202;
              transition: 0.5s ease;
            }
          }
        }
        .info {
          h2 {
            font-size: 1.2rem;
          }
          .all {
            .social {
              display: flex;
              gap: 1rem;
              margin-top: 1rem;
              a {
                color: #fff;
                margin-bottom: 0.5rem;
                width: 50px;
                height: 50px;
                background-color: var(--bg);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;

                svg {
                  font-size: 25px;
                }
                &:hover {
                  color: var(--btn);
                  transition: 0.5s ease;
                }
              }
            }
            .email {
              cursor: pointer;
              &:hover {
                color: #b40202;
                transition: 0.5s ease;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`;
export default Footer;
