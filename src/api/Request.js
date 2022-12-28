export const Api_key = "74348df6e62e8463f45893fa98b36690";
const Requests = {
  getTrending: `/trending/all/week?api_key=${Api_key}`,
  getPopularMovies: `/movie/popular?api_key=${Api_key}`,
  getUpcoming: `/movie/upcoming?api_key=${Api_key}`,
  getDiscoverMovie: `/discover/movie?api_key=${Api_key}`,
  getPopularTv: `tv/popular?api_key=${Api_key}`,
  getOnAir: `/tv/on_the_air?api_key=${Api_key}`,
  getDiscoverTv: `/discover/tv?api_key=${Api_key}`,
  getMovieGenre: `/genre/movie/list?api_key=${Api_key}`,
  getTvGenre: `/genre/tv/list?api_key=${Api_key}`,
};
export default Requests;
