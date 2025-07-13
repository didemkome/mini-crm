import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

import Pagination from '@/components/Pagination/Pagination.tsx';
import AddUserModal from '@/components/AddUserModal/AddUserModal.tsx';
import Button from '@/components/UI/Button/Button.tsx';
import { useUserContext } from '@/hooks/useUserContext.ts';

import * as S from './List.styled.ts';
import UserListTable from '@/pages/user/List/UserListTable/UserListTable.tsx';
import UserCardList from '@/pages/user/List/UserCardList/UserCardList.tsx';
import useDeviceBreakpoints from '@/hooks/useDeviceBreakpoints.ts';
import NotFoundMessage from '@/components/NotFoundMessage/NotFoundMessage.tsx';
import Loading from '@/components/Loading/Loading.tsx';

const UserList = () => {
  const navigate = useNavigate();
  const { isMobile } = useDeviceBreakpoints();
  const { state, dispatch, isLoading } = useUserContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [searchTerm, setSearchTerm] = useState(searchQuery);

  const itemsPerPage = isMobile ? 8 : 10;

  const isModalOpen = location.pathname.endsWith('/add');

  const openModal = () => navigate('/users/add');
  const closeModal = () => navigate('/');

  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (!state.isPaginated && searchParams.has('page')) {
      const params = new URLSearchParams(searchParams);
      params.delete('page');
      setSearchParams(params, { replace: true });
    }
  }, [state.isPaginated, searchParams, setSearchParams]);

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

  if (isLoading) {
    return <Loading text="Loading users..." />;
  }

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
          <Button onClick={toggleView}>
            Switch to {state.viewType === 'table' ? 'Card' : 'Table'} View
          </Button>
          <Button onClick={togglePagination}>
            {state.isPaginated ? 'Show All Users' : 'Show Paginated'}
          </Button>

          <Button onClick={openModal}>
            <UserPlus size={18} style={{ marginLeft: '4px' }} />
            Add User
          </Button>
        </S.ButtonGroup>
      </S.ControlsWrapper>

      {displayedUsers.length === 0 ? (
        <NotFoundMessage text="No data found." />
      ) : state.viewType === 'table' ? (
        <UserListTable users={displayedUsers} isVirtualized={!state.isPaginated} />
      ) : (
        <UserCardList users={displayedUsers} isVirtualized={!state.isPaginated} />
      )}

      {state.isPaginated && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
      )}

      {isModalOpen && <AddUserModal onClose={closeModal} />}
    </S.Container>
  );
};

export default UserList;
