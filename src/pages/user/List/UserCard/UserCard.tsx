import type { User } from '@/types/user';

import * as S from './UserCard.styled';
import { useNavigate } from 'react-router-dom';
type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Title>{user.name}</S.Title>
      <S.Text>{user.email}</S.Text>
      <S.Text>{user.role}</S.Text>
      <S.Text>
        {new Date(user.createdAt).toLocaleDateString('tr-TR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </S.Text>
      <button onClick={() => navigate(`/user/${user.id}`)}>Details</button>
    </S.Container>
  );
};

export default UserCard;
