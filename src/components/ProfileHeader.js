import React, {useContext, useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import Follow from './Follow';
import Modal from './Modal';
import Button from '../styles/Button';
import {UserContext} from '../context/UserContext';
import {OptionsIcon} from './Icons';
import {CloseIcon} from './Icons';

const MobileWrapper = styled.div`
    margin: 1rem 0;
    font-size: 1rem;
    padding-left: 1rem;

    .mobile-profile-stats span{
        padding-right: 1rem;
    }
    .mobile-bio, .mobile-profile-stats{
        display: none;
    }

    @media screen and (max-width: 645px){
        .mobile-bio{
            display: block;        
        }

        .mobile-profile-stats{
            display: block;
            margin-bottom: 0.4rem;

        }
    }
    a{
        color: ${(props) => props.theme.blue};
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    margin-bottom: 2rem;

    .avatar{
        width 180px;
        heoght: 180px;
        object-fit: cover;
        border-radius: 90px;
        margin-right: 2rem;
    }
    .profile-meta{
        display: flex;
        align-items: baseline;
        margin-bottom: 1rem;
    }
    .profile-meta h2{
        position: relative;
        top: 3px;
    }
    .profile-stats{
        display: flex;
        margin-bottom: 1rem;
    }
    .options svg{
        position: relative;
        top: 7px;
        margin-left: 1rem;
    }
    span{
        padding-right: 1rem;
    }
    a{
        color: ${(props) => props.theme.blue};
    }
    @media screen and (max-width: 645px){
        font-size: 1rem;

        .bio, .profile-stats{
            display: none;
        }
        .avatar{
            width: 140px;
            height: 140px
        }
        .profile-meta{
            flex-direction: column;
        }
        button{
            margin-left: 0;
        }
        .bio-mobile{
            margin-left: 0;
        }
    }
    @media screen and (max-width: 420px){
        font-size: 0.9rem;

        avatar{
            width: 100px;
            height: 100px
        }
    }
`;

const modalHeaderStyled = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBotton: "1px solid #DBDBDB",
    padding: "1rem",
};