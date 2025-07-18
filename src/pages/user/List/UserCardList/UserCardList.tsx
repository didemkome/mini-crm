import { FixedSizeGrid as Grid } from 'react-window';
import type { User } from '@/types/user';
import { forwardRef } from 'react';
import UserCard from '@/pages/user/List/UserCard/UserCard.tsx';
import * as ListS from '../List.styled.ts';
import * as S from './UserCardList.styled.ts';
import useDeviceBreakpoints from '@/hooks/useDeviceBreakpoints.ts';

export const StyledOuter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <ListS.OuterContainer ref={ref} {...props} />
);

type Props = {
  users: User[];
  isVirtualized: boolean;
};

const CARD_WIDTH = 280;
const CARD_HEIGHT = 180;

const COLUMN_WIDTH = CARD_WIDTH;
const ROW_HEIGHT = CARD_HEIGHT;

const getColumnCount = (isMobile: boolean, isTablet: boolean) => {
  if (isMobile) return 1;
  if (isTablet) return 3;
  return 4;
};

const UserCardList: React.FC<Props> = ({ users, isVirtualized }) => {
  const { isMobile, isTablet } = useDeviceBreakpoints();

  const columnCount = getColumnCount(isMobile, isTablet);
  const rowCount = Math.ceil(users.length / columnCount);

  if (isVirtualized) {
    return (
      <S.Container $isVirtualized={isVirtualized}>
        <Grid
          columnCount={columnCount}
          columnWidth={isMobile ? window.innerWidth - 40 : COLUMN_WIDTH}
          height={window.innerHeight - 200}
          rowCount={rowCount}
          rowHeight={ROW_HEIGHT}
          width={window.innerWidth}
          outerElementType={StyledOuter}
        >
          {({ columnIndex, rowIndex, style }) => {
            const index = rowIndex * columnCount + columnIndex;
            if (index >= users.length) return null;

            return (
              <S.GridItem style={style} key={users[index].id}>
                <UserCard user={users[index]} />
              </S.GridItem>
            );
          }}
        </Grid>
      </S.Container>
    );
  }

  return (
    <S.Container $isVirtualized={isVirtualized}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </S.Container>
  );
};

export default UserCardList;
