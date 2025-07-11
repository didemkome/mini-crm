import { useReducer, type ReactNode } from 'react';
import { userReducer, initialUserState } from '../reducers/userReducer';
import { UserContext } from './UserTypes';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
