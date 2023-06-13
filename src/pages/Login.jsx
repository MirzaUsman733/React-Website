import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const handleForgotPassword = () => {
    if (!values.email) {
      toast('Please enter your email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    setButtonDisable(true);

    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        setButtonDisable(false);
        toast("Password reset email sent. Please check your inbox.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        setButtonDisable(false);
        toast(error.message, {
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
  const submitHandler = () => {
    if (!values.email || !values.password) {
      toast('Please fill all the input field', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }
    setButtonDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setButtonDisable(false);
        toast("You Are Successfully Login as a User", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        navigate("/user");
      })
      .catch((err) => {
        setButtonDisable(false);
        toast(err, {
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
    <div id="center" className="center text-center text-dark my-5" style={{backgroundColor:"White"}}>
      <div id="sme">
        <header id="header">
          <h1 className="text-center text-uppercase mt-5">User login</h1>
          <Input
            type="email"
            className="my-4"
            name="Email"
            placeholder="Email"
            id="email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <Input
            type="password"
            className="input"
            placeholder="Password"
            id="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, password: event.target.value }))
            }
          />
          <p className="text-end forget" onClick={handleForgotPassword}>Forget Password</p>
          <button
            className="btnLg btn btn-primary fs-5 mb-5"
            onClick={submitHandler}
            disabled={buttonDisable}
          >
            Login
          </button>
          <p>
            Create the account?{" "}
            <span>
              <Link to="/signup">Signup</Link>
            </span>
          </p>
        </header>
      </div>
    </div>
  );
}
