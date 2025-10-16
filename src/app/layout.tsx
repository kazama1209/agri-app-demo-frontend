'use client';

import { usePathname } from 'next/navigation';
import { MantineProvider, AppShell } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Sidebar } from '@/components/layout/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldHideSidebar = pathname.startsWith('/login');

  return (
    <html lang="ja">
      <body>
        <MantineProvider defaultColorScheme="light">
          <Notifications position="top-right" />

          <AppShell
            padding="md"
            navbar={
              shouldHideSidebar
                ? undefined
                : {
                    width: 240,
                    breakpoint: 'sm',
                  }
            }
          >
            {!shouldHideSidebar && (
              <AppShell.Navbar>
                <Sidebar />
              </AppShell.Navbar>
            )}

            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
