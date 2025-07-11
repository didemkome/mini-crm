import type { UserAction, UserState } from '@/types/user';

export const initialUserState: UserState = {
  users: [],
  viewType: 'table',
};

export const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'TOGGLE_VIEW':
      return { ...state, viewType: state.viewType === 'table' ? 'card' : 'table' };
    default:
      return state;
  }
};
