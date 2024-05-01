import React from 'react';
import { Card, Image, Text, Badge, Button, Group, Flex, Stack } from '@mantine/core';
import Poster from '../../assets/img/poster.svg';
import NextImage from 'next/image';
import { Star } from '@/shared/ui';

export const MovieCard = () => {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md">
        <Group justify="space-between">
          <Image component={NextImage} h={170} w={119} src={Poster} alt="poster" />

          <Stack align="flex-start" justify="space-between" h={170}>
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

            <Group justify="space-between" gap={8}>
              <Text c="var(--color-grey-600)">Genres</Text>
              <Text c="var(--color-black)">Drama, Crime, Fantasy</Text>
            </Group>
          </Stack>

          <Stack h={170} align="center" justify="flex-start" gap="md">
            <Star />
          </Stack>
        </Group>
      </Card>
    </>
  );
};
