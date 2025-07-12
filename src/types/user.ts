export type ViewType = 'table' | 'card';

export type Roles = 'Admin' | 'Manager' | 'Developer';

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  isActive: boolean;
  latitude: number;
  longitude: number;
};

export type UserState = {
  users: User[];
  viewType: ViewType;
  isPaginated: boolean;
};

export type UserAction =
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'TOGGLE_VIEW' }
  | { type: 'TOGGLE_PAGINATION' };

export type UserContextType = {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
};

export const RolesArr = ['Admin', 'Manager', 'Developer'];
