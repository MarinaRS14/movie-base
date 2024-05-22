import { useRef } from 'react';
import { Button, Group, NumberInput, NumberInputHandlers, Stack } from '@mantine/core';

import style from './range.module.scss';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

type RangeProps = {
  from: number;
  to: number;
  label: string;
};

export const Range = (props: RangeProps) => {
  const { from, to, label } = props;

  const handlersRef = useRef<NumberInputHandlers>(null);

  return (
    <Group gap={8}>
      <NumberInput
        label={label}
        placeholder="From"
        classNames={{
          label: style.label,
          input: style.input,
          control: style.control,
        }}
        variant="filled"
        decimalScale={1}
        min={-3.4}
        max={3.4}
        step={0.1}
        style={{ width: '48%' }}
      />

      <NumberInput
        label={label}
        placeholder="To"
        classNames={{
          label: style.label,
          input: style.input,
          control: style.control,
        }}
        variant="filled"
        decimalScale={1}
        min={-3.4}
        max={3.4}
        step={0.1}
        style={{ width: '48%' }}
      />
    </Group>
  );
};
