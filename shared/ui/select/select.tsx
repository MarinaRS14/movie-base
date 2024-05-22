import { Select as SelectMantine } from '@mantine/core';
// import { SelectProps } from '../multiselect';
import style from './select.module.scss';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

type SelectProps = {
  label: string;
};

export const Select = (props: SelectProps) => {
  const { label } = props;

  const [dropdownOpened, { toggle }] = useDisclosure();

  const [value, setValue] = useState<string | null>('Most Popular');

  const icon = dropdownOpened ? (
    <IconChevronUp
      stroke={1.5}
      style={{ width: 24, height: 24, color: 'var(--color-purple-main)' }}
    />
  ) : (
    <IconChevronDown stroke={1.5} style={{ width: 24, height: 24 }} />
  );

  return (
    <SelectMantine
      value={value}
      onChange={setValue}
      classNames={{
        label: style.label,
        input: style.input,
        dropdown: style.dropdown,
        option: style.option,
      }}
      label={label}
      defaultValue="Most Popular"
      data={[
        'Most Popular',
        'Least Popular',
        'Most Rated',
        'Least Rated',
        'Most Voted',
        'Least Voted',
      ]}
      withCheckIcon={false}
      comboboxProps={{ shadow: 'sm' }}
      rightSection={icon}
      dropdownOpened={dropdownOpened}
      onClick={toggle}
      onBlur={toggle}
    />
  );
};
