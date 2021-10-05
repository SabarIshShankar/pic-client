import React, { useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { client } from "./utils";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import logo from "../assets/logo.png";

export const FormWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
`;
