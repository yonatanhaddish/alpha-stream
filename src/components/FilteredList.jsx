import React, { useState } from "react";

function FilteredList({ order, movieType, language, moviesList, tvShowsList }) {
  const [filteredMoviesResult, setFilteredMoviesResult] = useState([]);
  const [filteredTvShowsResult, setFilteredTvShowsResult] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  //   console.log(order);
  //   console.log(movieType);
  //   console.log(language);
  //   console.log(moviesList);
  //   console.log(tvShowsList);

  //   const result_movies_asc = moviesList.sort((a, b) =>
  //     a.title.localeCompare(b.title)
  //   );
  //   const result_tv_shows_asc = tvShowsList.sort((a, b) =>
  //     a.name.localeCompare(b.name)
  //   );
  //   console.log("ooo", language);
  //     function resultMoviesAsc() {
  //       const result_movies_asc = moviesList.sort((a, b) =>
  //         a.title.localeCompare(b.title)
  //       );
  //       return result_movies_asc;
  //       // console.log("222", result_movies_asc);
  //       // setFilteredMoviesResult(result_movies_asc);
  //     }
  //   if (order === "asc") {
  //     const sortedMovies = moviesList
  //       .slice()
  //       .sort((a, b) => a.title.localeCompare(b.title));

  //     console.log("444", filteredMoviesResult);
  //   }

  //   function resultMoviesDsc() {
  //     const result_movies_dsc = moviesList.sort((a, b) =>
  //       b.title.localeCompare(a.title)
  //     );
  //     return result_movies_dsc;
  //     // console.log("444", result_movies_dsc);
  //     // setFilteredTvShowsResult(result_movies_dsc);
  //   }

  //   if (order == "asc") {
  //     const test = resultMoviesAsc();
  //   }
  //   if (order == "dsc") {
  //     const test = resultMoviesDsc();
  //   }

  //   console.log("rrrrrrrrr", filteredMoviesResult);
  //   const result_movies_dsc = result_movies_asc.sort((a, b) =>
  //     b.title.localeCompare(a.title)
  //   );

  //   const result_tv_shows_asc = tvShowsList.sort((a, b) =>
  //     a.name.localeCompare(b.name)
  //   );
  //   const result_tv_shows_dsc = tvShowsList.sort((a, b) =>
  //     a.name.localeCompare(b.name)
  //   );

  return (
    <>
      <h1>FilteredList</h1>
    </>
  );
}

export default FilteredList;
