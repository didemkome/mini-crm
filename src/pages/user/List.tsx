import { useEffect } from 'react';

import { generateFakeUsers } from '@/utils/generateFakeUsers.ts';

import { useUserContext } from '@/context/UserProvider.tsx';

const UserList = () => {
  const { state, dispatch } = useUserContext();

  useEffect(() => {
    if (state.users.length === 0) {
      const fakeUsers = generateFakeUsers(5000);
      dispatch({ type: 'SET_USERS', payload: fakeUsers });
    }
  }, [state.users.length, dispatch]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {state.users.slice(0, 20).map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
