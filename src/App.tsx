import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from '@/pages/user/List/List.tsx';
import UserDetail from '@/pages/user/Detail/Detail.tsx';
import Layout from '@/components/Layout/Layout.tsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/add" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
