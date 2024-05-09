import { Group, Image, Title } from '@mantine/core';
import React from 'react';
import NextImage from 'next/image';
import Logo from '../../../assets/img/logo.svg';

export const LogoHeader = () => {
  return (
    <>
      <Group gap={12} mb={80}>
        <Image component={NextImage} h={32} w={32} src={Logo} alt="logo" />
        <Title c={'var(--color-purple-main)'} fz={24}>
          ArrowFlicks
        </Title>
      </Group>
    </>
  );
};
