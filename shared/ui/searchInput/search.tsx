import { useState } from 'react';
import { Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import style from './search.module.scss';

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
        rightSection={
          <Button variant="filled" color="var(--color-purple-main)" size="xs">
            Button
          </Button>
        }
        classNames={style}
      />
    </div>
  );
};
