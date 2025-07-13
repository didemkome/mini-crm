import { type ReactNode, useReducer, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import { userReducer, initialUserState } from '@/reducers/userReducer';

import { generateFakeUsers } from '@/utils/generateFakeUsers.ts';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      dispatch({ type: 'SET_USERS', payload: JSON.parse(storedUsers) });
    } else {
      const fakeUsers = generateFakeUsers(5000);
      dispatch({ type: 'SET_USERS', payload: fakeUsers });
      localStorage.setItem('users', JSON.stringify(fakeUsers));
    }
    setIsLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch, isLoading }}>{children}</UserContext.Provider>
  );
};
