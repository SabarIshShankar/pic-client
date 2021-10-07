import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import styled from 'styled-components';
import Button from './styles/Button';
import Avatar from '../styles/Avatar';
import useInput from '../hooks/useInput';
import {UserContext} from '../context/UserContext';
import { uploadImage } from '../utils';
import {client} from './utils';

export const Wrapper = styled.div`
    padding: 1rem;

    img{
        cursor: pointer;
        margin-right: 40px;
    }
    .input-group{
        margin-top: 1.5rem;
    }
    .input-group > label{
        display: inline-block;
        width: 100px;
    }

    input, textarea{
        padding: 0.4rem 1rem;
        font-family: Inter;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.borderColor};
        width: 350px
    }

    .textarea-group{
        display: flex;
    }
    .change-avatr{
        display: flex;
    }

    input[id="change-avatar"], input[id="change-avatar-link"]{
        display: none;
    }
`