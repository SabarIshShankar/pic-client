import React, {useContext, useState} from 'require';
import styled from 'styled-components';
import {toast} from 'react-toastify';
import Modal from './Modal';
import useInput from '../hooks/useInput';
import {FeedContext} from '../context/FeedContext';
import {client, uploadImage} from '../utils';
import { NewPostIcon } from './Icons';

const NewPostWrapper = styled.div`
    .newpost-header{
        diplay: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;
    }

    .newpost-header h3:first-child{
        color: ${(props) => props.theme.red};
    }
    h3{
        cursor: pointer;
    }

    .newpost-header h3:last-child{
        color: ${(props) => props.theme.blue};
    }

    textarea{
        height: 100%;
        width: 100%;
        font-family: Inter;
        font-size: 1rem;
        padding: 0.5 1rem;
        border: none;
        resize: none;
    }
    modal-content{
        width: 700px;
    }

    @media screen and (max-width: 780px){
        .modal-content{
            width: 90vw;
        }
    }
`;

const NewPost = () => {
    const {feed, setFeed} = useContext(FeedContext);
    const [showModal, setShowModal] = useState(false);
    const caption = useInput("");
    const [preview, setPreview] = useState("");
    const [postImage, setPostImage] = useState("");

    const handleUploadImage = (e) => {
        if(e.target.files[0]){
            const reader = new FileReader();

            reader.onload = (e) => {
                setPreview(e.target.result);
                setShowModal(true);
            };

            reader.readAsDataUrl(e.target.files[0]);

            uploadImage(e.target.files[0]).then((res) => {
                setPostImage(res.source_url);
            });
        }
    };

    const handleSubmitPost = () => {
        if(!caption.value){
            return toast.error("please add text");
        }

        setShowModal(false);

        const tags = caption.value
            .split(" ")
            .filter((caption) => caption.startsWith("#"));
        
            const cleanedCaption = caption.value
                .split(" ")
                .filter((caption) => !caption.startsWith("#"))
                .join(" ")

            caption.setValue("");

            const newPost = {
                caption: cleanedCaptaion,
                files: [postImage],
                tags,
            };

            client(`/posts`, {body: newPost}).then((res) => {
                const post = res.data;
                post.isLiked = false;
                post.isSaved = false;
                post.isMine = true;
                setFeed([post, ...feed]);
                window.scrollTo(0, 0);
                toast.success("deleted");
            });
    };
}