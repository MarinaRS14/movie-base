import React, { useState } from 'react';
import { ActionIcon, rem, VisuallyHidden, Text, Group, Flex } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import style from './star.module.scss';

type StarProps = {
  color?: string;
  rating?: number | null;
};

export const Star = (props: StarProps) => {
  const { color = 'var(--color-grey-300)', rating } = props;

  const [fav, setFav] = useState<boolean>(false);

  return (
    <Flex justify="space-between" gap={4}>
      <ActionIcon
        variant="transparent"
        aria-label="favorite"
        disabled={color === 'var(--color-yellow)' ? true : false}
        className={style.button}
        onClick={() => setFav(!fav)}>
        <IconStarFilled
          style={{ width: rem(28), height: rem(28) }}
          color={fav ? 'var(--color-purple-main)' : color}
        />
        <VisuallyHidden>Like movie</VisuallyHidden>
      </ActionIcon>
      {rating && (
        <Text fw={700} p={3}>
          {rating}
        </Text>
      )}
    </Flex>
  );
};
