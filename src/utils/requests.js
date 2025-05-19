const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function getRandomPage(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=${getRandomPage()}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&page=${getRandomPage()}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&page=${getRandomPage()}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&page=${getRandomPage()}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&page=${getRandomPage()}`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&page=${getRandomPage()}`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648&page=${getRandomPage()}`,
  fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&page=${getRandomPage()}`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37&page=${getRandomPage()}`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&page=${getRandomPage()}`,
  fetchTvShows: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${getRandomPage()}`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
  fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
  fetchPopularPeople: `/person/popular?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
};

export default requests;
