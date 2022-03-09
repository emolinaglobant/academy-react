import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));

  return (
    <section>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {moviesList?.Search?.map((item, index) => (
              <Grid key={index} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${item.imdbID}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={item.Poster}
                      alt={item.Title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="GrayText.primary">
                        {item.Title}
                      </Typography>
                      <Typography variant="body2" color="GrayText.primary">
                        ({item.Year})
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default MoviesList;
