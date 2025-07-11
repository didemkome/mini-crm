import { createContext } from 'react';
import type { UserContextType } from '../types/user';

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
