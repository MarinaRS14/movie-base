import { useState } from 'react';
import { Rating } from '@mantine/core';

type RatingProps = {
  rating: number | null;
  setRating: (rating: number) => void;
};

export const RatingStars = (props: RatingProps) => {
  // const [value, setValue] = useState(0);

  const { rating, setRating } = props;

  return (
    <Rating count={10} value={rating} onChange={setRating} color="var(--color-yellow)" size={28} />
  );
};
