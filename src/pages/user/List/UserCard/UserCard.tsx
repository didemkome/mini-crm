import type { User } from '@/types/user';
import { useNavigate } from 'react-router-dom';

import { useUserContext } from '@/hooks/useUserContext.ts';

import * as S from './UserCard.styled';
type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();
  const { state } = useUserContext();

  return (
    <S.Container $isPaginated={state.isPaginated}>
      <S.Title title={user.name}>{user.name}</S.Title>
      <S.Text title={user.email}>{user.email}</S.Text>
      <S.Text>{user.role}</S.Text>
      <S.Text>
        {new Date(user.createdAt).toLocaleDateString('tr-TR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </S.Text>
      <button onClick={() => navigate(`/users/${user.id}`)}>Details</button>
    </S.Container>
  );
};

export default UserCard;
