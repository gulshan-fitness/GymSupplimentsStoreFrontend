
import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Context = createContext();

export default function Context_holder(props) {
  const [user, setuser] = useState(null);

  const [usertoken, setusertoken] = useState(null);
  const [UserLoginPopUp, setUserLoginPopUp] = useState(false);

  const [UserSignUpPopUp, setUserSignUpPopUp] = useState(false);
  const notify = (msg, status) => {
    toast(msg, {
      position: "top-right",
      type: status === 1 ? "success" : "error",
    });
  };


  return (
    <Context.Provider
      value={{
        UserLoginPopUp,
        setUserLoginPopUp,
        UserSignUpPopUp,
        setUserSignUpPopUp,
        user,
        setuser,
        usertoken,
        setusertoken,notify
      }}
    >
      {props.children}

      <ToastContainer />
    </Context.Provider>
  );
}

export { Context };
