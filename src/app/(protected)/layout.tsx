'use client';

import { MantineProvider, AppShell } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Sidebar } from '@/components/layout/Sidebar';
import { AuthGuard } from '../providers/AuthGuard';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider defaultColorScheme="light">
      <Notifications position="top-right" />
      <AuthGuard>
        <AppShell
          padding="md"
          navbar={{
            width: 240,
            breakpoint: 'sm',
          }}
        >
          <AppShell.Navbar>
            <Sidebar />
          </AppShell.Navbar>
          <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
      </AuthGuard>
    </MantineProvider>
  );
}
