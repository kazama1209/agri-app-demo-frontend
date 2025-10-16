'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Stack,
  Group,
  Anchor,
  Box,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      login();
      notifications.show({
        title: 'ログイン成功',
        message: 'ダッシュボードに移動します',
        color: 'green',
      });
    } catch {
      notifications.show({
        title: 'エラー',
        message: 'ログインに失敗しました',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper radius="md" p="xl" withBorder maw={400} w="100%" shadow="sm">
        <Title order={2} ta="center" mb="lg">
          ログイン
        </Title>

        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="メールアドレス"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
            <PasswordInput
              label="パスワード"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
          </Stack>

          <Group justify="space-between" mt="md">
            <Anchor size="sm" href="/signup">
              新規登録はこちら
            </Anchor>
            <Button type="submit" loading={loading}>
              ログイン
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
}
