import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

const Theme = createTheme({
  palette: {
    type: "dark",
  },
});

const More = ({ setPage, numPages = 50 }) => {
  const handelePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <Container>
      <ThemeProvider theme={Theme}>
        <Pagination
          count={numPages}
          onChange={(e) => handelePage(e.target.textContent)}
          variant="outlined"
          color="primary"
        />
      </ThemeProvider>
    </Container>
  );
};
const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  margin-left: 3rem;
  width: 70%;
  @media (max-width: 1300px) {
    width: 70%;
    font-size: 0.9rem;
    margin: 0 auto;
    @media (max-width: 600px) {
      margin-left: 0;
      width: 60%;
      margin: 0 auto;
    }
  }
  @media (min-width: 1310px) {
    width: 70%;
    margin: 0 auto;
  }
`;
export default More;
