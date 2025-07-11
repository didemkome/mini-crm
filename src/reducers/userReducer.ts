import type { UserAction, UserState } from '@/types/user';

export const initialUserState: UserState = {
  users: [],
  viewType: 'table',
  isPaginated: true,
};

export const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_USERS': {
      localStorage.setItem('users', JSON.stringify(action.payload));
      return { ...state, users: action.payload };
    }
    case 'ADD_USER': {
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return { ...state, users: updatedUsers };
    }
    case 'TOGGLE_VIEW':
      return { ...state, viewType: state.viewType === 'table' ? 'card' : 'table' };
    case 'TOGGLE_PAGINATION':
      return { ...state, isPaginated: !state.isPaginated };
    default:
      return state;
  }
};
