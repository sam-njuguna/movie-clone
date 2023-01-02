import React, { useEffect, useState } from "react";
import { Chip } from "@material-ui/core";
import styled from "styled-components";
import Api from "../api/Api";
const Genres = ({ setPage, get_Url, selectedGenres, setSelectedGenres }) => {
  const [genres, setGenres] = useState([]);
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  useEffect(() => {
    const getData = async () => {
      const request = await Api.get(get_Url);
      setGenres(request.data.genres);
      return () => {
        setGenres({});
      };
    };
    getData();
    // eslint-disable-next-line
  }, [get_Url]);

  return (
    <Container>
      {genres.map((genre, index) => (
        <div className="main" key={index}>
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            key={genre.id}
            clickable
            onClick={() => handleAdd(genre)}
          />
        </div>
      ))}
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <div className="main">
            <Chip
              label={genre.name}
              style={{ margin: 2 }}
              size="small"
              color="primary"
              key={genre.id}
              clickable
              onDelete={() => handleRemove(genre)}
            />
          </div>
        ))}
    </Container>
  );
};
const Container = styled.div`
  padding-top: 8rem;
  border-radius: 0.4rem;
  width: 50%;
  margin: 0 auto;
  overflow-x: scroll;
  overflow-y: hidden;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ::-webkit-scrollbar {
    width: 6px;
    height: 4px;
    display: none;
  }

  @media (max-width: 950px) {
    width: 100%;
    grid-template-columns: repeat(10, 1fr);
  }
`;

export default Genres;
