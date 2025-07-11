import { type ReactNode, useContext, useReducer } from 'react';
import { UserContext } from './UserContext';
import { userReducer, initialUserState } from '@/reducers/userReducer';
import type { UserContextType } from '@/types/user.ts';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within UserProvider');
  return context;
};
