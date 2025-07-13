import { FixedSizeList as List } from 'react-window';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/UI/Button/Button.tsx';
import * as S from './UserListTable.styled.ts';
import type { User } from '@/types/user';
import { forwardRef } from 'react';

type Props = {
  users: User[];
  isVirtualized: boolean;
};

const ROW_HEIGHT = 60;

export const StyledOuter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <S.OuterContainer ref={ref} {...props} />
);

const UserListTable: React.FC<Props> = ({ users, isVirtualized }) => {
  const navigate = useNavigate();

  const RowContent = (user: User) => (
    <>
      <S.Cell title={user.name}>{user.name}</S.Cell>
      <S.Cell title={user.email}>{user.email}</S.Cell>
      <S.Cell>{user.role}</S.Cell>
      <S.Cell>{new Date(user.createdAt).toLocaleDateString('tr-TR')}</S.Cell>
      <S.Cell>
        <Button onClick={() => navigate(`/users/${user.id}`)}>Details</Button>
      </S.Cell>
    </>
  );

  return (
    <S.Container>
      <S.Header>
        <S.Cell>Name</S.Cell>
        <S.Cell>Email</S.Cell>
        <S.Cell>Role</S.Cell>
        <S.Cell>Creation Date</S.Cell>
        <S.Cell>Actions</S.Cell>
      </S.Header>

      {isVirtualized ? (
        <List
          height={window.innerHeight - 220}
          itemCount={users.length}
          itemSize={ROW_HEIGHT}
          width="100%"
          itemKey={(index) => users[index].id}
          outerElementType={StyledOuter}
        >
          {({ index, style }) => {
            const user = users[index];
            return (
              <S.Row key={user.id} style={style}>
                {RowContent(user)}
              </S.Row>
            );
          }}
        </List>
      ) : (
        users.map((user) => <S.Row key={user.id}>{RowContent(user)}</S.Row>)
      )}
    </S.Container>
  );
};

export default UserListTable;
