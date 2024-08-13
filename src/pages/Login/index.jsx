import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import {
  loginUser,
  accountsSelector,
  checkSession,
} from "~/redux/reducers/accountSlice";
import logoLogin from "~/assets/login-logo.png";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const accounts = useSelector(accountsSelector);
  const { isLogin, isLoading } = accounts;
  const location = useLocation();
  const previousURL = location.state?.url || "/dashboard";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    //console.log({ email, password });
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((account) => {
        // console.log('account:',account);
        sessionStorage.setItem("token", JSON.stringify(account));
        navigate("/dashboard");
      })
      .catch((error) => {
        // console.log("Co loi xay ra:", error);
        toast.error("email hoặc mật khẩu không đúng", {          
          position: "top-left"
        });

      });
  };

  useEffect(() => {
    if (isLogin === false) {
      dispatch(checkSession());
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      navigate(previousURL);
    }
  }, [isLogin]);
  return (
    <div className="login-form">
      <div className="wrapper ">
        <div className="icon">
          <img src={logoLogin} alt="" />
        </div>
        <div className="text-center mt-4 name"> HAMADA LOGIN </div>
        <form className="p-3 mt-3" onSubmit={handleLogin}>
          <div className="input-field flex flex-row justify-center items-center">
            <span className="far fa-user"></span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field flex flex-row justify-center items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isLoading ? (
            <button disabled className="btn mt-3" type="submit">
              Loading...
            </button>
          ) : (
            <button className="btn mt-3" type="submit">
              Đăng Nhập
            </button>
          )}
        </form>
        <div className="text-center fs-6">
          <a href="forget">Forgot password?</a> or{" "}
          <a href="/register">Sign up</a>
        </div>
      </div>
    </div>
  );
}
