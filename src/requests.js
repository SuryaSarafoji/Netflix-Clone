const key = "480012012470851018eaa89fa60275fb";

const requests = [
  {
    type: "Popular",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  },
  {
    type: "Top Rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  },
  {
    type: "Must Watch",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  },
  {
    type: "Upcoming",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  },
];

export default requests;
