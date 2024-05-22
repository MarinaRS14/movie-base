import { MovieCard } from '@/components';
import { Breadcrumbs } from '@/shared/ui';
import { AspectRatio, Card, Container, Divider, Group, Image, Text, rem } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function MovieDetailsPage() {
  const router = useRouter();
  const id = router.query.id;
  console.log(router.query.id);

  const [movie, setMovie] = useState<ResponseType[] | []>([]);

  useEffect(() => {
    fetch(`/api/movie/${id}`)
      .then((response) => response.json())
      .then((response) => setMovie(response.result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Container pt={16} pl={0} pr={0} pb={84} style={{ maxWidth: '800px' }}>
        <Breadcrumbs movieId={Number(id)} />
        {/* <MovieCard large movie={} /> */}

        <Card shadow="sm" padding="lg" radius="md" mt={20}>
          <Text fw={700} fz={20} style={{ lineHeight: '20px' }}>
            Trailer
          </Text>

          <div style={{ display: 'flex', paddingTop: '20px' }}>
            <AspectRatio ratio={16 / 9} style={{ flex: `0 0 ${rem(500)}` }}>
              <iframe
                src="https://www.youtube.com/embed/mzJ4vCjSt28"
                title="YouTube video player"
                style={{ border: '3px solid var(--color-grey-200)', borderRadius: '8px' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </div>

          <Divider my="sm" mt={20} mb={20} />

          <Text fw={700} fz={20} pb={20} style={{ lineHeight: '20px' }}>
            Description
          </Text>

          <Text c={'var(--color-black)'}>
            Dan Brown's controversial best-selling novel about a powerful secret that's been kept
            under wraps for thousands of years comes to the screen in this suspense thriller from
            Director Ron Howard.{' '}
          </Text>

          <Divider my="sm" mt={20} mb={20} />

          <Text fw={700} fz={20} pb={20} style={{ lineHeight: '20px' }}>
            Production
          </Text>
        </Card>
      </Container>
    </>
  );
}

export default MovieDetailsPage;
