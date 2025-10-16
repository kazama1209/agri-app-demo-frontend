'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Center, Loader } from '@mantine/core';
import { useAuth } from '@/hooks/useAuth';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, initialized } = useAuth();

  const publicRoutes = ['/login', '/signup'];

  const isPublicRoute = publicRoutes.some((path) => pathname.startsWith(path));

  useEffect(() => {
    if (initialized && !isLoggedIn && !isPublicRoute) {
      router.push('/login');
    }
  }, [initialized, isLoggedIn, isPublicRoute, router]);

  if (!initialized) {
    return (
      <Center h="100vh">
        <Loader color="blue" />
      </Center>
    );
  }

  if (!isLoggedIn && !isPublicRoute) return null;

  return <>{children}</>;
}
