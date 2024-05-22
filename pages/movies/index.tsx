import { MovieCard } from '@/components';
import { Button, MultiSelect, Pagination, Range, Search, Select } from '@/shared/ui';
import { Center, Container, Group, Title, Loader, Grid, Space, Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react';

export type ResponseType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Movies() {
  const [data, setData] = useState<ResponseType[] | []>([]);

  const [activePage, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/discover/movie?include_adult=false&include_video=false&page=${activePage}`)
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(activePage);

  return (
    <>
      <Container pt={16} pl={0} pr={0} pb={84}>
        {data ? (
          <>
            <Grid gutter={0}>
              <Grid.Col span={6}>
                <Title fz={32}>Movies</Title>
              </Grid.Col>
              <Grid.Col span={6}>
                <Search />
              </Grid.Col>
            </Grid>
            <Space h={40} />

            <Grid grow align="stretch" columns={7}>
              <Grid.Col span={2}>
                <MultiSelect label="Genres" placeholder="Select genre" />
              </Grid.Col>
              <Grid.Col span={2}>
                <MultiSelect label="Release year" placeholder="Select release year" />
              </Grid.Col>
              <Grid.Col span={2}>
                {/* <MultiSelect label="Ratings" placeholder="Select ratings" /> */}
                <Range from={1} to={3} label="Ratings" />
              </Grid.Col>
              <Grid.Col span={1} pt={30}>
                <Button title="Reset filters" disabled variant="transparent" pl={0} pr={0} />
              </Grid.Col>

              <Grid.Col span={2} offset={{ base: 0, md: 5 }}>
                <Select label="Sort by" />
              </Grid.Col>
            </Grid>

            <Grid columns={2} mt={16}>
              {data.map((movie) => (
                <Grid.Col span={{ base: 2, md: 1, lg: 1 }} key={movie.id}>
                  <MovieCard movie={movie} />
                </Grid.Col>
              ))}
            </Grid>

            <Container pt={24}>
              <Group justify="flex-end">
                <Pagination activePage={activePage} setPage={setPage} />
              </Group>
            </Container>
          </>
        ) : (
          <Center style={{ height: '100vh' }}>
            <Loader color={'var(--color-purple-main)'} />
          </Center>
        )}
      </Container>
    </>
  );
}

//?language=en-US&page=1&primary_release_year=2005&sort_by=popularity.asc&vote_average.gte=1&vote_average.lte=2&with_genres=35

// language=en-US
// with_genres
// primary_release_year
// vote_average.lte
// vote_average.gte
// sort_by
// page
