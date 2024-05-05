import React from 'react';
import NextImage from 'next/image';
import { Container, Flex, Image } from '@mantine/core';
import NotFoundImg from '../../assets/img/404.svg';

function NotFound() {
  return (
    <Container fluid size="responsive">
      <Flex
        // mih={50}
        // bg="rgba(0, 0, 0, .3)"
        // gap="md"
        justify="center"
        align="center"
        direction="column">
        <Image component={NextImage} src={NotFoundImg} alt="poster" />
      </Flex>
    </Container>
  );
}
export default NotFound;
