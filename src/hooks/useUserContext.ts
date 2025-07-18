import type { UserContextType } from '@/types/user.ts';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext.tsx';

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within UserProvider');
  return context;
};
