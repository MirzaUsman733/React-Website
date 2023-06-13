import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
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
  
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast("SignOut Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/login");
      })
      .catch((error) => {
        toast(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Blog Post
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <Link className="nav-link active" to="login">
                    Our Story
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" to="signup">
                    Membership
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" to="adminLogin">
                    Write
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" to="login">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    to="login"
                    className="nav-link active btn btn-info px-3 rounded-pill"
                  >
                    Get Started
                  </Link>

                </li>
                {user ? <li className="nav-item ms-2">
                  <Link
                  onClick={handleSignout}
                    to="/login"
                    className="nav-link active btn btn-danger text-white px-3 rounded-pill"
                  >
                    Sign Out
                  </Link>
                  
                </li>
: ""}
              </ul>
            </div>
          </div>
        </div>
        
      </nav>
    </div>
  );
}
