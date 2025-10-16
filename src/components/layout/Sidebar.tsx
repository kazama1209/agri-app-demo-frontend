'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Box, NavLink, Stack, Title, Divider, Button, UnstyledButton } from '@mantine/core';
import { IconHome, IconSettings, IconLogout } from '@tabler/icons-react';
import { useAuth } from '@/hooks/useAuth';

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const links = [
    { label: 'ホーム', href: '/', icon: IconHome },
    { label: '設定', href: '/settings', icon: IconSettings },
  ];

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <Box
      w={240}
      h="100vh"
      p="md"
      bg="gray.0"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRight: '1px solid var(--mantine-color-gray-3)',
        position: 'sticky',
        top: 0,
      }}
    >
      <Box>
        <UnstyledButton
          component={Link}
          href="/"
          style={{
            display: 'block',
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
          }}
        >
          <Title order={4} mb="sm">
            AgriApp Demo
          </Title>
        </UnstyledButton>

        <Divider mb="md" color="gray.3" />

        <Stack gap="xs">
          {links.map(({ label, href, icon: Icon }) => (
            <NavLink
              key={href}
              label={label}
              leftSection={<Icon size={18} />}
              href={href}
              active={pathname === href}
              variant="light"
              style={{ borderRadius: '8px' }}
            />
          ))}
        </Stack>
      </Box>

      <Box>
        <Divider mt="md" mb="sm" color="gray.3" />
        <Button
          variant="subtle"
          color="red"
          fullWidth
          leftSection={<IconLogout size={18} />}
          onClick={handleLogout}
        >
          ログアウト
        </Button>
      </Box>
    </Box>
  );
}
