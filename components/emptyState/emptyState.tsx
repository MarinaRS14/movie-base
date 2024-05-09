import { Center, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import { Image } from '@mantine/core';
import Loading from '../../assets/img/loading.svg';
import NextImage from 'next/image';
import { Button } from '@/shared/ui';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const EmptyState = () => {
  const router = useRouter();
  return (
    <>
      <Center>
        <Container fluid size="responsive">
          <Flex justify="center" align="center" direction="column">
            <Image component={NextImage} src={Loading} alt="empty result" pb={10} priority />
            <Text fw={700} pb={10}>
              We can't find the page you are looking for
            </Text>
            <Link href={'/movies'}>
              <Button title="Find Movies" />
            </Link>
          </Flex>
        </Container>
      </Center>
    </>
  );
};
