import React, { useState } from "react";

function FilteredList({ order, movieType, language, moviesList, tvShowsList }) {
  const [filteredResult, setFilteredResult] = useState([]);
  //   console.log(order);
  //   console.log(movieType);
  //   console.log(language);
  //   console.log(moviesList);
  //   console.log(tvShowsList);

  const result_movies_asc = moviesList.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const result_movies_dsc = result_movies_asc.sort((a, b) =>
    b.title.localeCompare(a.title)
  );
  //   const result_tv_shows_asc = tvShowsList.sort((a, b) =>
  //     a.name.localeCompare(b.name)
  //   );
  //   const result_tv_shows_dsc = tvShowsList.sort((a, b) =>
  //     a.name.localeCompare(b.name)
  //   );
  console.log("333", result_movies_asc);
  console.log("444", result_movies_dsc);
  return (
    <>
      <h1>FilteredList</h1>
    </>
  );
}

export default FilteredList;
