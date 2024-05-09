import { Box, Button } from '@mantine/core';
import React, { useState } from 'react';
import style from './navLink.module.scss';

import Link from 'next/link';
import { NavLink as NavLinkMantine } from '@mantine/core';

type LinkType = {
  label: string;
  link: string;
  disabled?: boolean;
};

interface NavLinkProps {
  data: LinkType[];
}

export const NavLink = (props: NavLinkProps) => {
  const { data } = props;

  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLinkMantine
      component={Link}
      href={item.link}
      key={item.label}
      active={index === active}
      label={item.label}
      onClick={() => setActive(index)}
      className={style.navlink}
      disabled={item.disabled}
    />
  ));

  return <Box c={'var(--color-black)'}>{items}</Box>;
};
