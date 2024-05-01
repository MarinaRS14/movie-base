import { MovieCard } from '@/components';
import { ButtonMantine, Demo, Star } from '@/shared/ui';
import { Button, Group } from '@mantine/core';

export default function IndexPage() {
  return (
    <Group
      mt={50}
      justify="center"
      style={{ background: 'var(--color-grey-300)', height: '100vh' }}>
      {/* <Demo /> */}
      {/* <ButtonMantine title={'some text'} size="s" color="var(--color-purple-400)" /> */}
      {/* <Star text="fffff" color="var(--color-yellow)" /> */}
      <MovieCard />
      <MovieCard />
    </Group>
  );
}
