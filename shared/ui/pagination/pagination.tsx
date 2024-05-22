import React, { useState } from 'react';
import { Pagination as PaginationMantine } from '@mantine/core';

import style from './pagination.module.scss';

type PaginationProps = {
  activePage: number;
  setPage: (page: number) => void;
};

export const Pagination = (props: PaginationProps) => {
  const { activePage, setPage } = props;

  return (
    <PaginationMantine
      color="var(--color-purple-main)"
      total={500}
      classNames={{ dots: style.dots }}
      value={activePage}
      onChange={setPage}
    />
  );
};
