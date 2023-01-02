import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./hooks/firebaseConfig";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import Search from "./pages/Search";
import MainPage from "./pages/MainPage";
import MovieDetails from "./pages/MovieDetails";
import Profile from "./pages/Profile";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="main">
      {!user ? (
        <MainPage />
      ) : (
        <Routes>
          <>
            <Route path="/" element={<Home />} exact />
            <Route path="/movie" element={<Movie />} exact />
            <Route path="/tv" element={<Series />} exact />
            <Route path="/search" element={<Search />} exact />
            <Route path="/details/:type/:id" element={<MovieDetails />} exact />
            <Route path="/profile" element={<Profile />} exact />
          </>
        </Routes>
      )}
    </div>
  );
};

export default App;
