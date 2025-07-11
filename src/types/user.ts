export type ViewType = 'table' | 'card';

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  active: boolean;
  latitude: number;
  longitude: number;
};

export type UserState = {
  users: User[];
  viewType: ViewType;
};

export type UserAction =
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'TOGGLE_VIEW' };

export type UserContextType = {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
};
