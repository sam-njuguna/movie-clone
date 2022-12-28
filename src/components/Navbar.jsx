import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const nav = [
  // {
  //   name: "Home",
  //   link: "/",
  // },
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
  };

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Conatiner>
      {/* <div className={`navbar ${scrolled ? "scroll" : ""}`}>
        <div className="left">
          <div className="logo">
            <h1>S</h1>
            <h4>Trailers</h4>
          </div>

          <ul>
            {nav.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <Link to="/search">
            <div className="search">
              <button>
                <FaSearch />
              </button>
            </div>
          </Link>

          <div className="profile" onClick={handleClick}>
            <CgProfile />
          </div>
        </div>
      </div> */}

      <div className={`navbar ${scrolled ? "scroll" : ""}`}>
        <div className="logo">
          <Link to="/">logo</Link>
        </div>
        <ul>
          {nav.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} exact>
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
  width: 100%;

  position: fixed;
  z-index: 9999;
  padding: 2rem 1rem;
  background-color: var(--bg);
  @media (min-width: 700px) {
    padding: 1rem 10rem;
    @media (max-width: 1299px) {
      padding: 2rem 6rem;
    }
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .main {
      display: flex;
      gap: 2rem;
      justify-content: space-between;
      align-items: center;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      li {
        a {
          color: var(--text);
          @media (max-width: 699px) {
            font-size: smaller;
          }
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
