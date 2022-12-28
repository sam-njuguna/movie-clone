import { createTheme, Tab, Tabs, ThemeProvider } from "@material-ui/core";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

import { SearchCard } from "../components";

import Api from "../api/Api";
import { Api_key } from "../api/Request";
import { motion } from "framer-motion";
import More from "../components/More";

const Search = () => {
  const [movie, setMovie] = useState([]);
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const [numOfPages, setNumOfPages] = useState();
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const getData = async () => {
    try {
      const { data } = await Api.get(
        `/search/${
          type ? "tv" : "movie"
        }?api_key=${Api_key}&language=en-US&query=${searchText}&page=${page}`
      );
      setMovie(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    getData();
    // eslint-disable-next-line
  }, [type, page]);
  const handleClick = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="all">
      <Container>
        <ThemeProvider theme={darkTheme}>
          <div className="field">
            <input
              type="text"
              placeholder="Search.."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <motion.p
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              type="submit"
              onClick={handleClick}
            >
              <FaSearch />
            </motion.p>
          </div>
          <div className="tabs">
            <Tabs
              value={type}
              indicatorColor="primary"
              textColor="primary"
              onChange={(event, newValue) => {
                setType(newValue);
                setPage(1);
              }}
              className="tab"
              style={{ width: "70%", margin: "0 auto" }}
              aria-label="disabled tabs example"
            >
              <Tab style={{ width: "20%", margin: "0 auto" }} label=" Movies" />
              <Tab style={{ width: "20%", margin: "0 auto" }} label="Series" />
            </Tabs>
          </div>
        </ThemeProvider>
        <div className="movies">
          <SearchCard movie={movie} />
        </div>
        {numOfPages > 1 && <More setPage={setPage} numOfPages={numOfPages} />}
      </Container>
    </div>
  );
};
const Container = styled.div`
  padding-top: 5rem;
  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      padding: 1rem;
      border: 1px solid #fff;
      background-color: transparent;
      width: 30%;
      color: white;
      font-size: 1.1rem;
      border-radius: 2rem;
      @media (max-width: 950px) {
        width: 70%;
      }
    }
    p {
      padding: 0.5rem;
      background-color: transparent;
      color: #b40202;
      border: none;
      margin-left: -3rem;

      svg {
        cursor: pointer;
        font-size: x-large;
        &:hover {
          transition: 0.2s ease;
          transform: scale(1.2);
        }
      }
    }
  }
  .tabs {
    margin-top: 1rem;
    padding: 0 6rem;
    @media (max-width: 950px) {
      padding: 0 2rem;
    }
  }
`;
export default Search;
