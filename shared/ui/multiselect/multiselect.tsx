import { useState } from 'react';
import {
  Combobox,
  Container,
  Group,
  Input,
  InputBase,
  ScrollArea,
  useCombobox,
} from '@mantine/core';
import { IconChevronCompactUp, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

import style from './multiselect.module.scss';

const genres = ['Drama', 'Comedy', 'Animation', 'Thriller', 'Fantasy'];

const sortBy = [
  'Most Popular',
  'Least Popular',
  'Most Rated',
  'Least Rated',
  'Most Voted',
  'Least Voted',
];
type MultiSelectProps = {
  label: string;
  placeholder: string;
};

export const MultiSelect = (props: MultiSelectProps) => {
  const { label, placeholder } = props;

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val],
    );

  const options = genres.map((item) => (
    <Combobox.Option
      tabIndex={0}
      value={item}
      key={item}
      active={value.includes(item)}
      classNames={{ option: style.option }}>
      <Group gap="sm">{item}</Group>
    </Combobox.Option>
  ));

  const icon = combobox.dropdownOpened ? (
    <IconChevronUp
      stroke={1.5}
      style={{ width: 24, height: 24, color: 'var(--color-purple-main)' }}
    />
  ) : (
    <IconChevronDown stroke={1.5} style={{ width: 24, height: 24 }} />
  );

  const MAX_DISPLAYED_VALUES = 3;

  const values = value
    .slice(
      0,
      MAX_DISPLAYED_VALUES === value.length ? MAX_DISPLAYED_VALUES : MAX_DISPLAYED_VALUES - 1,
    )
    .join(', ');

  // console.log(value);

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={handleValueSelect}
      transitionProps={{ transition: 'pop', duration: 200 }}
      shadow="sm">
      <Combobox.Target>
        <Container fluid p={0}>
          <InputBase
            label={label}
            classNames={{ input: style.input, section: style.section, label: style.label }}
            component="button"
            type="button"
            pointer
            rightSection={icon}
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents={'none'}>
            {values.length > 0 ? (
              <>
                {values}
                {value.length > MAX_DISPLAYED_VALUES && (
                  <span> +{value.length - (MAX_DISPLAYED_VALUES - 1)} more</span>
                )}
              </>
            ) : (
              <Input.Placeholder>{placeholder}</Input.Placeholder>
            )}
          </InputBase>
        </Container>
      </Combobox.Target>

      <Combobox.Dropdown styles={{ dropdown: { width: 600 } }}>
        <Combobox.Options>
          <ScrollArea.Autosize mah={216} type="scroll">
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
