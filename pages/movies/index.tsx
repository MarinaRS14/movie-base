import { Search } from '@/shared/ui';
import { Center, Container, Group, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';

export default function Movies() {
  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDhjNjdmZmQxODJmYTQxYjdhOTY3NWU3YmViMDQ3YyIsInN1YiI6IjY2NDA4N2Y1OTJkNzFkMjc0NWMxMDc1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y2nOfoXLz5wwzbntH17KtvOi1CcF2rDmqP-bJCti0Bg',
    //   },
    // };

    // fetch(
    //   'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    //   options,
    // )
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));

    fetch('/discover/movie')
      .then((response) => response.json())
      .then((response) => console.log(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Container fluid>
        <Group justify="space-between">
          <Title fz={32}>Movies</Title>
          <Search />
        </Group>
      </Container>
    </>
  );
}

//?language=en-US&page=1&primary_release_year=2005&sort_by=popularity.asc&vote_average.gte=1&vote_average.lte=2&with_genres=35
