import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const nav = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Movies",
    link: "/movie",
  },
  {
    name: "Series",
    link: "/tv",
  },
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
    window.scroll(0, 0);
  };

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Conatiner>
      <div className={`navbar ${scrolled ? "scroll" : ""}`}>
        <div className="logo">
          <Link to="/">
            <h1>S</h1>
            <h4>Trailers</h4>
          </Link>
        </div>
        <ul>
          {nav.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} exact onClick={() => window.scroll(0, 0)}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="main">
          <Link to="/search">
            <FaSearch />
          </Link>
          <div className="profile" onClick={handleClick}>
            <CgProfile />
          </div>
        </div>
      </div>
    </Conatiner>
  );
};
const Conatiner = styled.div`
  .scroll {
    background-color: #141414dd;
    width: 100%;
    animation: load 1s alternate;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    position: fixed;
    z-index: 9999;
    @media (max-width: 699px) {
      padding: 1.2rem;
      .logo {
        display: none;
      }
    }
    @media (min-width: 700px) {
      padding: 0 10rem;
      @media (max-width: 999px) {
        padding: 0 6rem;
      }
    }
    .logo {
      a {
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
    }
    .main {
      display: flex;
      gap: 2rem;
      justify-content: space-between;
      align-items: center;
      svg {
        font-size: 1.5rem;
        color: var(--text);
        cursor: pointer;
        transition: var(--trans);
        &:hover {
          color: var(--btn);
        }
        @media (max-width: 699px) {
          font-size: 1.3rem;
        }
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      li {
        a {
          color: var(--text);
          font-weight: 500;
          cursor: pointer;
          transition: var(--trans);
          &:hover {
            color: #838181dd;
          }
          @media (max-width: 699px) {
            font-size: smaller;
          }
        }
        .active {
          color: #b40202;
        }
      }
    }
  }
  @keyframes load {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
export default Navbar;
