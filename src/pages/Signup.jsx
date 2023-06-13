import "./Signup.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
export default function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const submitHandler = () => {
    if (!values.name || !values.email || !values.password) {
      toast("Please fill the input field", {
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
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setButtonDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
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
        console.log(err);
      });
  };
  return (
    <div
      className="center text-dark text-center my-5"
      style={{ backgroundColor: "white" }}
    >
      <div id="sme">
        <header id="header">
          <h1 className="text-center text-uppercase mt-5">User Signup</h1>
          <Input
            type="text"
            className="mt-4"
            name=""
            placeholder="Full Name"
            id="txt"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <Input
            type="email"
            className="my-4"
            name=""
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
          <p className="text-end text-primary forget">Forget Password</p>
          <button
            className="btnLg btn btn-primary fs-5 mb-5"
            onClick={submitHandler}
            disabled={buttonDisable}
          >
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </header>
      </div>
    </div>
  );
}
