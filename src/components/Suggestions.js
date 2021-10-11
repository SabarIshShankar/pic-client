import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Follow from './Follow';
import Avatar from '../styles/Avatar';
import {UserContext} from '../context/UserContext';
import {client} from '../utils';

const Wrapper = styled.div`
    width: 280px;
    margin-top: 1rem;
    position: fixed;
    top:6rem;
    left: 64.5%;

    .suggestions: {
        margin-top: 1.8rem;
    }
    .suggestions div{
        width: 230px;
    }
    .suggestions > h3{
        margin-bottom: 0.5rem;
    }
    .suggestions-usercard{
        display: flex;
        align-items: center;
        font-size: 0.9rem;
    }
    .suggestions img{
        width: 44px;
        height:44px;
        border-radius: 22px;
    }

    .follow{
        position: relative;
        top: -0.3rem;
    }
    span{
        color: ${(props) => props.theme.blue};
        font-weight: 500;
    }
    @media screen and (max-width: 1095px){
        display: 67%;
    }
    @media screen and (max-width:1040px){
        display: none;
    }
`