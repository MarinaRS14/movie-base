import React from 'react';
import { Card, Image, Text, Badge, Button, Group, Flex, Stack } from '@mantine/core';
import Poster from '../../assets/img/poster.svg';
import NextImage from 'next/image';
import { Star } from '@/shared/ui';

type CardProps = {
  large?: boolean;
};

export const MovieCard = (props: CardProps) => {
  const { large } = props;

  const small = { height: 170, width: 119 };
  const big = { height: 352, width: 250 };

  const height = large ? big.height : small.height;
  const width = large ? big.width : small.width;

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md">
        <Group justify="space-between">
          <Image component={NextImage} h={height} w={width} src={Poster} alt="poster" />

          <Stack align="flex-start" justify="space-between" h={height}>
            <Flex direction="column" align="flex-start">
              <Text c="var(--color-purple-main)" fw={600} size="xl">
                The Green Mile
              </Text>
              <Text c="var(--color-grey-600)">1990</Text>
              <Group justify="space-between" gap={8}>
                <Star text="9.3" color="var(--color-yellow)" />
                <Text c="var(--color-grey-600)">(2.9M)</Text>
              </Group>
            </Flex>

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

          <Stack h={height} align="center" justify="flex-start" gap="md">
            <Star />
          </Stack>
        </Group>
      </Card>
    </>
  );
};
