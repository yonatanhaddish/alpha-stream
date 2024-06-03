import axios from "axios";

export async function fetchMoviesData() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=d0f5f2e135336200362af8a1a73acb17`
    );
    return response.data.results;
  } catch (err) {
    throw err;
  }
}

// export async function fetchSeriesMoviesData() {
//   try {
//     const response = await axios.get("https://api.tvmaze.com/shows", {
//       params: {
//         page: 0,
//         size: 5,
//       },
//     });
//     const shows = response.data;
//     console.log(shows);
//   } catch (err) {
//     throw err;
//   }
// }
