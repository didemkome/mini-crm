import type { UserAction, UserState } from '@/types/user';

export const initialUserState: UserState = {
  users: [],
  viewType: localStorage.getItem('viewType') === 'card' ? 'card' : 'table',
  isPaginated: localStorage.getItem('isPaginated') !== 'false',
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
    case 'TOGGLE_VIEW': {
      const newView = state.viewType === 'table' ? 'card' : 'table';
      localStorage.setItem('viewType', newView);
      return { ...state, viewType: newView };
    }
    case 'TOGGLE_PAGINATION': {
      const newIsPaginated = !state.isPaginated;
      localStorage.setItem('isPaginated', JSON.stringify(newIsPaginated));
      return { ...state, isPaginated: newIsPaginated };
    }
    default:
      return state;
  }
};
