import { useState } from 'react';
import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import style from './search.module.scss';
import { Button } from '../button';

export const Demo = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <div className={style.container}>
      <Input
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Search movie title"
        radius="md"
        leftSection={<IconSearch size={16} />}
        rightSection={<Button title="Search" size="s" />}
        rightSectionWidth={112}
        classNames={style}
        rightSectionPointerEvents="all"
      />
    </div>
  );
};
