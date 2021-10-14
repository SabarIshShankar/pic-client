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
`
