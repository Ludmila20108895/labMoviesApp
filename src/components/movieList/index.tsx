import React from "react";

import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import { BaseMovieListProps } from "../../types/interfaces";

const MovieList: React.FC<BaseMovieListProps> = ({
  movies,
  selectFavourite,
}) => {
  const movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} selectFavourite={selectFavourite} />
    </Grid>
  ));
  return movieCards;
};

export default MovieList;
