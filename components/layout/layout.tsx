import { LogoHeader, NavigateLink } from '@/shared/ui';
import { AppShell, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { FC, ReactNode } from 'react';

interface MyProps {
  children?: ReactNode;
  disabled?: boolean;
}

export const Layout: FC<MyProps> = (props) => {
  const { children, disabled } = props;
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: { base: 60, sm: 24 } }}
        disabled={disabled}
        layout="alt"
        navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        pl={24}
        pr={24}
        bg={'var(--color-grey-100)'}>
        <AppShell.Header withBorder={false} bg={'var(--color-grey-100)'}>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="md"
            color={'var(--color-purple-main)'}
            pt={36}
            pl={24}
          />
        </AppShell.Header>

        <AppShell.Navbar bg={'var(--color-purple-100)'} pt={24} pl={24} pr={24}>
          <Flex gap={24}>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="md"
              color={'var(--color-purple-main)'}
            />

            <LogoHeader />
          </Flex>

          <NavigateLink label="Movies" link="movies" />
          <NavigateLink label="Rated movies" link="rated-movies" />
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
};
