import { PropsWithChildren, ReactElement } from 'react';

import { NextPage } from 'next';

import { Modal, MovieCard } from '@/components';
import { Button, Demo, NavLink, RatingStars, Star, Tabs } from '@/shared/ui';
import {
  Group,
  Text,
  Title,
  AppShell,
  Burger,
  Container,
  AppShellNavbar,
  AppShellMain,
  Center,
  Image,
  //   NavLink,
  Skeleton,
} from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import NextImage from 'next/image';
import Logo from '../../assets/img/logo.svg';
// import { NextPageWithLayout } from './_app';
// import { Layout, getLayout } from '@/components/layout/layout';

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <AppShell
        layout="alt"
        navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="xl"
        bg={'var(--color-grey-100)'}>
        <AppShell.Header withBorder={false} bg={'var(--color-grey-100)'}>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </AppShell.Header>

        <AppShell.Navbar bg={'var(--color-purple-100)'} pt={24} pl={24} pr={24}>
          <Group gap={12} mb={80}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

            <Image component={NextImage} h={32} w={32} src={Logo} alt="logo" />
            <Title c={'var(--color-purple-main)'} fz={24}>
              ArrowFlicks
            </Title>
          </Group>

          <NavLink />
        </AppShell.Navbar>

        <AppShell.Main>
          <Center>{children}</Center>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
