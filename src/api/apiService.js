import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17`
    );
    return response.data.results;
  } catch (err) {
    throw err;
  }
}
