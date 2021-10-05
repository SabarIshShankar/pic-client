import React, { useContext } from "react";
import { toast } from "react-toastify";

import { client } from "utils";
import { FormWrapper } from "./Login";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";

import logo from "../assets/logo.png";

const Signup = ({ login }) => {
  const { setUser } = useContext(UserContext);
  const email = useInput("");
  const fullname = useInput("");
  const username = useInput("");
  const password = useInput("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value || !username.value || !fullname.value) {
      return toast.error("Please fill in all the fields");
    }

    if (username.value === "explore") {
      return toast.error(
        "The username you entered is not acceptable, try again"
      );
    }

    const re = /^[a-z0-9]+$/i;
    if (re.exec(username.value) === null) {
      return toast.error("try another name");
    }

    const body = {
      email: email.value,
      password: password.value,
      username: password.value,
      fullname: fullname.value
    };

    try {
      const { token } = await client("/auth/signup", { body });
      localStorage.setItem("token", token);
    } catch (err) {
      return toast.error(err.message);
    }
  };
};
