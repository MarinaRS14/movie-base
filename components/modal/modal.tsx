import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal as ModalMantine, Text, Divider, Stack, Flex } from '@mantine/core';
import { Button, RatingStars } from '@/shared/ui';

export const Modal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ModalMantine.Root opened={opened} onClose={close} centered size={380}>
        <ModalMantine.Overlay />
        <ModalMantine.Content>
          <ModalMantine.Header>
            <ModalMantine.Title>Modal title</ModalMantine.Title>
            <ModalMantine.CloseButton />
          </ModalMantine.Header>
          <Divider my="sm" style={{ marginTop: '0px' }} />
          <ModalMantine.Body>
            <Stack align="flex-start" justify="space-between" h={126}>
              <Text fw={700}>Coco film</Text>
              <RatingStars />
              <Button title="Save" onClick={close} />
            </Stack>
          </ModalMantine.Body>
        </ModalMantine.Content>
      </ModalMantine.Root>

      <Button title="Open" onClick={open}>
        Open modal
      </Button>
    </>
  );
};
