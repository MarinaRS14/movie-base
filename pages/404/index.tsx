import React from 'react';
import NextImage from 'next/image';
import { Center, Container, Flex, Image, Text } from '@mantine/core';
import NotFoundImg from '../../assets/img/404.svg';
import { Button, LogoHeader } from '@/shared/ui';
import style from './404.module.scss';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container fluid size="responsive" p={0}>
      <div className={style.logo}>
        <LogoHeader />
      </div>

      <Center className={style.center}>
        <Flex justify="center" align="center" direction="column">
          <Image component={NextImage} src={NotFoundImg} alt="poster" pb={48} />
          <Text fw={700} pb={10}>
            We can't find the page you are looking for
          </Text>
          <Link href={'/movies'}>
            <Button title="Go Home" />
          </Link>
        </Flex>
      </Center>
    </Container>
  );
}
