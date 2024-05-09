import { Box, Button } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import style from './navLink.module.scss';

import Link from 'next/link';
import { NavLink as NavLinkMantine } from '@mantine/core';
import { useRouter } from 'next/router';

type LinkType = {
  label: string;
  link: string;
  disabled?: boolean;
};

export const NavigateLink = (props: LinkType) => {
  const { label, link, disabled = false } = props;

  const router = useRouter();

  const activeRoute = router.pathname.slice(1);

  const [active, setActive] = useState<boolean>(false);

  return (
    <NavLinkMantine
      component={Link}
      href={link}
      key={label}
      active={activeRoute === link}
      label={label}
      onClick={() => setActive(true)}
      className={style.navlink}
      disabled={disabled}
    />
  );
};
