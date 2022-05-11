import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageStock from './Pages/Home/Home/ManageStock/ManageStock';
import useScrollToTop from './hooks/useScrollToTop';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';

function App() {
  useScrollToTop();
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ManageStock></ManageStock>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
