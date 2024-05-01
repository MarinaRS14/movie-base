import React, { useState } from 'react';
import { ActionIcon, rem, VisuallyHidden, Text, Group } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import style from './star.module.scss';

type StarProps = {
  color?: string;
  text?: string;
};

export const Star = (props: StarProps) => {
  const { color = 'var(--color-grey-300)', text } = props;

  const [fav, setFav] = useState<boolean>(false);

  return (
    <Group justify="space-between" gap={4}>
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
      {text && <Text fw={700}>{text}</Text>}
    </Group>
  );
};
