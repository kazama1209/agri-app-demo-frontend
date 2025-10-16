'use client';

import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <Button
        onClick={() => notifications.show({ message: 'Success！' })}
      >
        トーストメッセージを表示
      </Button>
    </main>
  );
}
