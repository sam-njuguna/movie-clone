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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
`;
export default More;
