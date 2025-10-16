'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Center, Loader } from '@mantine/core';
import { useAuth } from '@/hooks/useAuth';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isLoggedIn, initialized } = useAuth();

  useEffect(() => {
    if (initialized && !isLoggedIn) {
      router.replace('/login');
    }
  }, [initialized, isLoggedIn, router]);

  if (!initialized) {
    return (
      <Center h="100vh">
        <Loader color="blue" />
      </Center>
    );
  }

  if (!isLoggedIn) return null;

  return <>{children}</>;
}
