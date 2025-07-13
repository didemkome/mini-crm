import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout/Layout.tsx';
import Loading from '@/components/Loading/Loading.tsx';

const UserList = lazy(() => import('@/pages/user/List/List.tsx'));
const UserDetail = lazy(() => import('@/pages/user/Detail/Detail.tsx'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading text="Loading..." />}>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/users/add" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
