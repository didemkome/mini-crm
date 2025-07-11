import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from '@/pages/user/List/List.tsx';
import UserDetail from '@/pages/user/Detail/Detail.tsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
