'use client';

import { useEffect, useState } from 'react';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('auth');
    if (stored === 'true') setIsLoggedIn(true);
    setInitialized(true);
  }, []);

  const login = () => {
    localStorage.setItem('auth', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout, initialized };
}
