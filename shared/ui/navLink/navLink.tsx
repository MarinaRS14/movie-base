import { Tabs as TabsMantine } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import style from './navLink.module.scss';

import Link from 'next/link';
import { NavLink as NavLinkMantine } from '@mantine/core';

type NavLinkProps = {
  label: string;
};

export const NavLink = (props: NavLinkProps) => {
  const {} = props;

  const router = useRouter();

  const [active, setActive] = useState(0);

  return (
    // <TabsMantine
    //   defaultValue="movies"
    //   orientation="vertical"
    //   value={router.query.activeTab as string}
    //   onChange={(value) => router.push(`/${value}`)}
    //   radius="md"
    //   classNames={style}>
    //   <TabsMantine.List>
    //     <TabsMantine.Tab value="movies">First tab</TabsMantine.Tab>
    //     <TabsMantine.Tab value="rated-movies">Second tab</TabsMantine.Tab>
    //   </TabsMantine.List>
    // </TabsMantine>

    <>
      <NavLinkMantine
        component={Link}
        href="/"
        label="movies"
        key={item.label}
        active={index === active}
        description={item.description}
        rightSection={item.rightSection}
        leftSection={<item.icon size="1rem" stroke={1.5} />}
        onClick={() => setActive(index)}
      />
      <NavLinkMantine component={Link} href="/rated-movies" label="rated-movies" />
    </>
  );
};
