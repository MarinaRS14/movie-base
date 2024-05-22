import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal as ModalMantine, Text, Divider, Stack, Flex } from '@mantine/core';
import { Button, RatingStars, Star } from '@/shared/ui';

export const Modal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [rating, setRating] = useState<number | null>(null);

  return (
    <>
      <ModalMantine.Root opened={opened} onClose={close} centered size={380}>
        <ModalMantine.Overlay />
        <ModalMantine.Content radius={8}>
          <ModalMantine.Header pb={0}>
            <ModalMantine.Title>Your rating</ModalMantine.Title>
            <ModalMantine.CloseButton />
          </ModalMantine.Header>
          <Divider my="sm" style={{ marginTop: '0px' }} />
          <ModalMantine.Body>
            <Stack align="flex-start" justify="space-between" h={126}>
              <Text fw={700}>Coco film</Text>
              <RatingStars rating={rating} setRating={setRating} />
              <Button title="Save" onClick={close} />
            </Stack>
          </ModalMantine.Body>
        </ModalMantine.Content>
      </ModalMantine.Root>

      <span onClick={open} style={{ height: '24px' }}>
        <Star rating={rating} />
      </span>

      {/* Open modal
      </Button> */}
    </>
  );
};
