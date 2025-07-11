import type { User } from '@/types/user';

import * as S from './UserCard.styled';
type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
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
    </S.Container>
  );
};

export default UserCard;
