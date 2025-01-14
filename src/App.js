import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import Tasklist from './pages/Tasklist';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import Navbar from 'D:/React/todo-app/src/Components/Navbar.jsx';
import Login from './auth/Login';
import Register from './auth/Register';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/login" />}></Route>
          <Route path='/' element={<Home />}>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route element={<ProtectedRoute/>}>
            <Route path='/create-task' element={<CreateTask />}></Route>
            <Route path='/task-list' element={<Tasklist />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
        </Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;