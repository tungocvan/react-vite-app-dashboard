import { useEffect } from "react";
import {  useNavigate , useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import {  accountsSelector  } from '~/redux/reducers/accountSlice';

// import Layout from "~/components/layout";

function PrivateRoute({ children , LayoutDefault, title}) {  
  const navigate = useNavigate();
  const accounts = useSelector(accountsSelector)
  const { isLogin } = accounts;
  let location = useLocation(); 
  useEffect(() => { 
    if(isLogin === false){    
        navigate('/login',{ state: { url: location.pathname } })
    }
  },[isLogin])
  
  return (
    <LayoutDefault title={title}>
        { children }
    </LayoutDefault>
  )
}

export default PrivateRoute;
