import { useEffect } from 'react';

import { generateFakeUsers } from '@/utils/generateFakeUsers.ts';

import { useUserContext } from '@/context/UserProvider.tsx';

import * as S from './List.styled.ts';

const UserList = () => {
  const { state, dispatch } = useUserContext();

  useEffect(() => {
    if (state.users.length === 0) {
      const fakeUsers = generateFakeUsers(5000);
      dispatch({ type: 'SET_USERS', payload: fakeUsers });
    }
  }, [state.users.length, dispatch]);

  return (
    <S.Container>
      <h1>User List</h1>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHeader>Name</S.TableHeader>
            <S.TableHeader>Email</S.TableHeader>
            <S.TableHeader>Role</S.TableHeader>
            <S.TableHeader>Creation Date</S.TableHeader>
          </S.TableRow>
        </thead>
        <tbody>
          {state.users.slice(0, 20).map((user) => (
            <S.TableRow key={user.id}>
              <S.TableCell>{user.name}</S.TableCell>
              <S.TableCell>{user.email}</S.TableCell>
              <S.TableCell>{user.role}</S.TableCell>
              <S.TableCell>
                {new Date(user.createdAt).toLocaleDateString('tr-TR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default UserList;
