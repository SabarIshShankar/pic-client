import React, {useEffect, useState} from 'react';
import {client} from '../utils';
import {HeartIcon, FilledHeartIcon} from './Icons';

const LikePost = ({isLiked, postId, incLikes, decLikes}) => {
    const [likedState, setLikes] = useState(isLiked);

    useEffect(() => {
        setLikes(isLiked);
    }, [isLiked]);

    const handleToggleLike = () => {
        if(likedState){
            setLiked(false);
            decLikes();
            client(`/posts/${postId}/toggleLike`);
        } else {
            setLikes(true);
            incLikes();
            client(`/posts/${postId}/toggleLike`);
        }
    };
    if(liekdState){
        return <FilledHeartIcon onClick={handleToggleLike}/>;
    }
    if(!likedState){
        return <HeartIcon onClick={handleToggleLike}/>;
    }
};

export default LikePost;