import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import PostPreview from '../components/PostPreview';
import ProfileHeader from '../components/ProfileHeader';
import Loader from '../components/Placeholder'
import Loader from "../components/Loader";
import {client} from '../utils';

const Wrapper = styled.div`
    :profile-tab{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.4rem 0;
    }
    .profile-tab div{
        display: flex;
        cursor: pointer;
        margin-right: 3rem;
    }

    .profile-tab span{
        padding-left: 0.3rem;
    }
    .profile-tab svg{
        height: 24px;
        width: 24px;
    }
    hr{
        border: 0.5px solid ${(props) => props.theme.borderColor};
    }
`;


