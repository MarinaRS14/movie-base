import React from 'react';
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Flex,
  Stack,
  Container,
  SimpleGrid,
  Grid,
} from '@mantine/core';
import Poster from '../../assets/img/poster.svg';
import NextImage from 'next/image';
import { Star } from '@/shared/ui';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '../modal';
import { ResponseType } from '@/pages/movies';

type CardProps = {
  large?: boolean;
  movie: ResponseType;
};

export const MovieCard = (props: CardProps) => {
  const { large, movie } = props;

  // console.log(movie);

  const small = { height: 170, width: 119 };
  const big = { height: 352, width: 250 };

  const height = large ? big.height : small.height;
  const width = large ? big.width : small.width;

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md">
        <Card.Section inheritPadding pt={'sm'} pb={'sm'}>
          <Flex gap="sm">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${movie.poster_path}`}
              width={width}
              height={height}
            />
            <Container p={0} style={{ width: '100%' }}>
              <Stack justify="space-between" h={height}>
                <div>
                  <Text c="var(--color-purple-main)" fw={600} size="xl">
                    {movie.title}
                  </Text>
                  <Text c="var(--color-grey-600)" fz={16}>
                    {movie.release_date.substring(0, 4)}
                  </Text>
                  <Group gap={8}>
                    <Star rating={+movie.vote_average.toFixed(1)} color="var(--color-yellow)" />
                    <Text c="var(--color-grey-600)">{`${(movie.popularity / 1000).toFixed(
                      1,
                    )}M`}</Text>
                  </Group>
                </div>

                {large ? (
                  <Flex direction="column">
                    <Group justify="space-between" gap={8}>
                      <Text c="var(--color-grey-600)">Genres</Text>
                      <Text c="var(--color-black)">Drama, Crime, Fantasy</Text>
                    </Group>
                    <Group justify="space-between" gap={8}>
                      <Text c="var(--color-grey-600)">Genres</Text>
                      <Text c="var(--color-black)">Drama, Crime, Fantasy</Text>
                    </Group>
                    <Group justify="space-between" gap={8}>
                      <Text c="var(--color-grey-600)">Genres</Text>
                      <Text c="var(--color-black)">Drama, Crime, Fantasy</Text>
                    </Group>
                    <Group justify="space-between" gap={8}>
                      <Text c="var(--color-grey-600)">Genres</Text>
                      <Text c="var(--color-black)">Drama, Crime, Fantasy</Text>
                    </Group>
                    <Group justify="space-between" gap={8}>
                      <Text c="var(--color-grey-600)">Genres</Text>
                      <Text c="var(--color-black)">Drama, Crime, Fantasy</Text>
                    </Group>
                  </Flex>
                ) : (
                  <Group justify="space-between" gap={8}>
                    <Text c="var(--color-grey-600)">Genres</Text>
                    <Text c="var(--color-black)">Drama, Crime, Fantasy</Text>
                  </Group>
                )}
              </Stack>
            </Container>

            <Badge component={Modal} />
          </Flex>
        </Card.Section>
      </Card>
    </>
  );
};
