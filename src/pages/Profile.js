import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import PostPreview from '../components/PostPreview';
import ProfileHeader from '../components/ProfileHeader';
import Loader from '../components/Placeholder'
import Loader from "../components/Loader";
import {client} from '../utils';
import { PostIcon } from "../components/Icons";

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

const Profile = () => {
    const [tab, seTab] = useState("POSTS");
    const {username} = useParams();
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [deadend, setDeadEnd] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        client(`/users/${username}`)
            .then((res) => {
                setLoading(false);
                setDeadEnd(false);
                setProfile(res.data);
            })
            .catch((err) => setDeadEnd(true));
    }, [username]);

    if(!deadend && loading){
        return <Loader/>;
    }

    if(deadend){
        return(
            <Placeholder title="Sorry, this page is not available"
            text="the link followed is broken, or removed"/>
        );
    }

    return(
        <Wrapper>
            <ProfileHeader
            profile={profile}
            />
            <hr/>

            <div className="profile-tab">
                <div style={{fontWeight: tab === "POSTS"?"500":""}}
                onClick={() => setTab("POSTS")}>
                    <PostIcon/>
                    <span>Posts</span>
                </div>
                <div style={{
                    fontWeight: tab === "SAVED" ? "500":""
                }}
                onClick={() => setTab("SAVED")}>
                    <SavedIcon/>
                    <span>Saved</span>
                </div>
            </div>
        </Wrapper>
    )
}
 


