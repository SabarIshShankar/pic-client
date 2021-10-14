import React, {useRef, useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import LikePost from '../components/LikePost';
import SavePost from '../components/SavePost';
import Comment from '../components/Comment';
import Placeholder from '../components/Placeholder';
import Avatar from '../styles/Avatar';
import Loader from '../components/Avatar';
import Modal from '../components/Modal';
import {ModalContent} from '../components/Post'
import useInput from '../hooks/useInput';
import { timeSince } from '../utils';
import {client} from '../utils';
import {MoreIcon, CommentIcon, InboxIcon} from '../components/Icons';


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr;

    .post-info{
        border: 1px solid ${(props) => props.theme.borderColor};
    }

    .post-header-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
    }

    .post-header{
        display: flex;
        align-items: center;
    }
    .post-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .post-actions-stats{
        padding: 1rem;
        padding-bottom: 0.1rem;
    }

    .post-actions{
        display: flex;
        align-items: center;
        padding-bottom: 0.5rem;
    }

    .post-actions svg:last-child{
        margin-left: auto;
    }

    .comments{
        border-bottom: 1px solid ${(props) => props.theme.borderColor};
        padding: 1rem;
        height: 300px;
        overflow-y: scroll;
        scrollbar=width: none;
    }
    .comments::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
    svg{
        margin-right: 1rem;
    }

    textarea{
        height: 100%;
        width: 100%;
        background: ${(props) => props.theme.bg};
        border: none;
        border-top: 1p solid ${(props) => props.theme.borderColor};
        resize: none;
        padding: 1rem 0 0 1rem;
        font-size: 1rem;
        font-family: "Fira Sans", sans-serif;
    }

    @media screen and (max-width: 840px){
        display: flex;
        flex-direction: column;

        .comments{
            height: 100%;
        }
    }
`;
