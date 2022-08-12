import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as FaIcons from "react-icons/fa";
import "./LogIn.css";
import { IconContext } from "react-icons";

export const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="loginBtn" onClick={() => loginWithRedirect()}>
      <IconContext.Provider
      value={{ color: 'black'}}
    >
        <FaIcons.FaUserAlt />
    </IconContext.Provider>
      L O G I N
    </button>
  );
};

export default LogInButton;
