import React,{ useState, useEffect} from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { ToastContainer } from 'react-toastify';
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import User from "./pages/User";
import Navbar from "./pages/Navbar";
import RealHome from "./pages/RealHome";
import BlogItems from "./pages/BlogItems";
import FourZeroFour from "./pages/FourZeroFour";
import Footer from "./pages/Footer";
import BlogView from './pages/BlogView'
import "./App.css";
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
// import UserView from "./pages/UserView";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <>
          {<Navbar />}
          <hr className="mt-0 pt-0"/>
          <main>
          <Routes>
            <Route path="/" element={<RealHome />} />
            <Route path="/login" element={user ?  <Navigate to="/user"/> : <Login/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={user ? <User />: <Navigate to="/login"/>} />
            <Route path="/blog/:postId" element={<BlogItems user={user}/>} />
            <Route path="/*" element={<FourZeroFour/>}/>
            {/* <Route path="/userview" element={<UserView/>}/> */}
            <Route path='/blogview' element={<BlogView/>}/>
          </Routes>
          </main>
          <Footer />
          <ToastContainer/>
          
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
