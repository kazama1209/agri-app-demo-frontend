'use client';

import { usePathname } from 'next/navigation';
import { Box, NavLink, Stack, Title, Divider } from '@mantine/core';
import { IconHome, IconSettings } from '@tabler/icons-react';

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { label: 'ホーム', href: '/', icon: IconHome },
    { label: '設定', href: '/settings', icon: IconSettings },
  ];

  return (
    <Box
      w={240}
      h="100vh"
      p="md"
      bg="gray.0"
      style={{
        borderRight: '1px solid var(--mantine-color-gray-3)',
        position: 'sticky',
        top: 0,
      }}
    >
      <Title order={4} mb="sm">
        AgriApp Demo
      </Title>

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
  );
}
