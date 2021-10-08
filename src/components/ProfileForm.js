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

    span{
        color: ${(props) => props.theme.blue};
        cursor: pointer;
    }
    button{
        margin-top: 1.5rem;
        margin-left: 6.25rem;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 550px){
        width: 98%;
        .input-group{
            display: flex;
            flex-direction: column;
        }
        label{
            padding-bottom: 0.5rem;
            font-size: 1rem;
        }
        button{
            margin-left: 0;
        }
    }

    @media-screen  and (max-width: 430px){
        input, textarea{
            width: 99%;
        }
    }
`;

const ProfileForm = () => {
    const history = useHistory();
    const {user, setUser } = useContext(UserContext);
    const [newAvatar, setNewAvatar] = useState(""); 

    const fullname = useInput(user.fullname);
    const username = useInput(user.username);
    const bio = useInput(user.bio);
    const website = useInput(user.website);

    const handleImageUpload = (e) => {
        if(e.target.files[0]){
            uploadImage(e.target.files[0]).then((res) => setNewAvatar(res.secure_url));
        }
    };

    const handleEditProfile = (e) => {
        e.preventDefault();

        if(!fullname.value){
            return toast.error("the name field should not be empty");
        }
        if(!username.value){
            return toast.error("username field shouldnot be empty");
        }

        const body = {
            fullname: fullname.value,
            username: username.value,
            bio: bio.value,
            website: website.value,
            avatar: newAvatar || user.avatar,
        };

        client("/users", {method: "PUT", body})
            .then((res) => {
                setUser(res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
                history.push(`/${body.username || user.username}`);
            })
            .catch((err) => toast.error(err.message));
    };

    return(
        <Wrapper>
            <form onSubmit={handleEditProfile}>
                <div className="input-group change-avatar">
                        
                </div>    
            </form>    
        </Wrapper>
    )
} 

