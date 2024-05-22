import { Anchor, Breadcrumbs as BreadcrumbsMantine } from '@mantine/core';

type BreadcrumbsProps = {
  movieId: number;
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { movieId } = props;

  const items = [
    { title: 'Movies', href: '/movies' },
    { title: `${movieId}`, href: `/movies/${movieId}` },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} c="var(--color-purple-main)">
      {item.title}
    </Anchor>
  ));

  return <BreadcrumbsMantine>{items}</BreadcrumbsMantine>;
};
