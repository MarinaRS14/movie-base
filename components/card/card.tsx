import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Poster from '../../assets/img/poster.svg';
import NextImage from 'next/image';

export const MovieCard = () => {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md">
        <Group justify="space-between" gap={8}>
          <Image component={NextImage} h={170} w={119} src={Poster} alt="poster" />
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>
      </Card>
    </>
  );
};
