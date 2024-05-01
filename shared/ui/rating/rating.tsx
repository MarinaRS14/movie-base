import { useState } from 'react';
import { Rating } from '@mantine/core';

export const RatingStars = () => {
  const [value, setValue] = useState(0);
  return (
    <Rating count={10} value={value} onChange={setValue} color="var(--color-yellow)" size={28} />
  );
};
