import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { generateFakeUsers } from '@/utils/generateFakeUsers.ts';

import { useUserContext } from '@/context/UserProvider.tsx';

import UserCard from '@/pages/user/List/UserCard/UserCard.tsx';
import * as S from './List.styled.ts';

const UserList = () => {
  const { state, dispatch } = useUserContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  useEffect(() => {
    if (state.users.length === 0) {
      const fakeUsers = generateFakeUsers(5000);
      dispatch({ type: 'SET_USERS', payload: fakeUsers });
    }
  }, [state.users.length, dispatch]);

  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  const toggleView = () => {
    dispatch({ type: 'TOGGLE_VIEW' });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const filteredUsers = state.users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <S.Container>
      <h1>User List</h1>

      <button onClick={toggleView}>
        Switch to {state.viewType === 'table' ? 'Card' : 'Table'} View
      </button>

      <input
        type="text"
        placeholder="Search by name, email or role"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          padding: '8px',
          fontSize: '1rem',
          marginBottom: '12px',
          width: '100%',
        }}
      />

      {state.viewType === 'table' ? (
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
            {filteredUsers.slice(0, 20).map((user) => (
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
      ) : (
        <S.CardContainer>
          {filteredUsers.slice(0, 20).map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </S.CardContainer>
      )}
    </S.Container>
  );
};

export default UserList;
