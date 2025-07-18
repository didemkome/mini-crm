import { useNavigate, useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import Button from '@/components/UI/Button/Button.tsx';
import { useUserContext } from '@/hooks/useUserContext.ts';
import * as S from './Detail.styled.ts';
import Loading from '@/components/Loading/Loading.tsx';
import NotFoundMessage from '@/components/NotFoundMessage/NotFoundMessage.tsx';

const MapSection = lazy(() => import('./MapSection/MapSection.tsx'));

interface IconDefaultPrototype {
  _getIconUrl?: () => void;
}

const UserDetail = () => {
  const { id } = useParams();
  const { state, isLoading } = useUserContext();
  const navigate = useNavigate();

  const user = state.users.find((u) => u.id === id);

  if (isLoading) {
    return <Loading text="Loading user data..." />;
  }

  if (!user) return <NotFoundMessage text="User not found." />;

  const position = [user.latitude, user.longitude] as [number, number];

  delete (L.Icon.Default.prototype as IconDefaultPrototype)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });

  return (
    <>
      <S.PageTitle>User Detail Page</S.PageTitle>

      <S.UserName>{user.name}</S.UserName>
      <S.Email>{user.email}</S.Email>

      <S.MapTitle>📍 Location of {user.name}</S.MapTitle>

      <S.MapWrapper>
        <Suspense fallback={<Loading text="Loading map..." />}>
          <S.MapWrapper>
            <MapSection name={user.name} position={position} />
          </S.MapWrapper>
        </Suspense>
      </S.MapWrapper>

      <Button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
        Go Back
      </Button>
    </>
  );
};

export default UserDetail;
