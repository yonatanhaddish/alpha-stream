import axios from "axios";

export async function fetchMoviesData() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17`
    );
    return response.data.results;
  } catch (err) {
    throw err;
  }
}

export async function fetchTvShowsData() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=d0f5f2e135336200362af8a1a73acb17`
    );
    return response.data.results;
  } catch (err) {
    throw err;
  }
}

export const adLists = [
  {
    id: 1,
    name: "Heineken",
    poster_path: "../assets/Heineken.jpg",
  },
  {
    id: 2,
    name: "Shell",
    poster_path: "../assets/Shell.png",
  },
  {
    id: 3,
    name: "Metro",
    poster_path: "../assets/Metro.png",
  },
  {
    id: 4,
    name: "Pepsi",
    poster_path: "../assets/Pepsi.jpg",
  },
];
