import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import Search from "./pages/Search";
import MainPage from "./pages/MainPage";

const App = () => {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  //   return unsubscribe;
  // }, [dispatch]);
  return (
    <div className="main">
      {/* <MainPage /> */}
      <Routes>
        <>
          <Route path="/" element={<Home />} exact />
          <Route path="/movie" element={<Movie />} exact />
          <Route path="/tv" element={<Series />} exact />
          <Route path="/search" element={<Search />} exact />
          {/* <Route path="/details/:type/:id" element={<MovieCard />} exact />
          <Route path="/profile" element={<Profile />} exact /> */}
        </>
      </Routes>
    </div>
  );
};

export default App;
