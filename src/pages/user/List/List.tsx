import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { generateFakeUsers } from '@/utils/generateFakeUsers.ts';

import { useUserContext } from '@/context/UserProvider.tsx';

import UserCard from '@/pages/user/List/UserCard/UserCard.tsx';
import * as S from './List.styled.ts';
import Pagination from '@/components/Pagination/Pagination.tsx';

const UserList = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useUserContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [searchTerm, setSearchTerm] = useState(searchQuery);

  const itemsPerPage = 10;

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

  const togglePagination = () => {
    dispatch({ type: 'TOGGLE_PAGINATION' });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    setSearchParams(() => {
      const params = new URLSearchParams();
      if (value) params.set('search', value);
      params.set('page', '1');
      return params;
    });
  };

  const filteredUsers = state.users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedUsers = state.isPaginated
    ? filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredUsers;

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', page.toString());
      if (searchTerm) {
        params.set('search', searchTerm);
      }
      return params;
    });
  };

  return (
    <S.Container>
      <S.Title>User List</S.Title>

      <S.ControlsWrapper>
        <S.Search
          type="text"
          placeholder="Search by name, email or role"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <S.ButtonGroup>
          <S.Button onClick={toggleView}>
            Switch to {state.viewType === 'table' ? 'Card' : 'Table'} View
          </S.Button>
          <S.Button onClick={togglePagination}>
            {state.isPaginated ? 'Show All Users' : 'Show Paginated'}
          </S.Button>
        </S.ButtonGroup>
      </S.ControlsWrapper>

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
            {displayedUsers.map((user) => (
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
                <S.TableCell>
                  <button onClick={() => navigate(`/user/${user.id}`)}>Details</button>
                </S.TableCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      ) : (
        <S.CardContainer>
          {displayedUsers.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </S.CardContainer>
      )}

      {state.isPaginated && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
      )}
    </S.Container>
  );
};

export default UserList;
