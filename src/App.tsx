import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from '@/pages/user/List';
import UserDetail from '@/pages/user/Detail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
