import React, {useContext} from 'react';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';
import {FeedContext} from '../context/FeedContext';
import {client} from '../utils';

const DeletPost = ({postId, closeModal, goToHome}) => {
    const {feed, setFeed} = useContext(FeedContext);
    const history = useHistory();

    const handleDeletePost = () => {
        closeModal();
        if(goToHome){
            history.push(`/`);
        }

        setFeed(feed.filter((post) => post._id !== postId));
        toast.success("post has been deleted");
        client(`/posts/${postId}`, {methods: "DELETE"});
    };

    return(
        <span className="danger"onClick={handleDeletePost}>
            Delete post
        </span>
    );
};

export default DeletePost;