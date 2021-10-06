import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import LikePost from "./LikePost";
import SavePost from "./SavePost";
import Comment from "./Comment";
import Modal from "./Modal";
import DeletePost from "./DeletePost";
import useInput from "../hooks/useInput";
import Avatar from "./styles/avatar";
import { client } from "../utils";
import { timeSince } from "../utils";
import { MoreIcon, CommentIcon, InboxIcon } from "./Icons";

const ModalContentWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;

  span:last-child {
    border: none;
  }

  span {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    cursor: pointer;
  }
`;

export const ModalContent = ({ hideGoToPost, postId, closeModal }) => {
  const history = useHistory();

  const handleGoToPost = () => {
    closeModal();
    history.push(`/p/${postId}`);
  };

  return (
    <ModalContentWrapper>
      <span className="danger" onClick={closeModal}></span>\
      <DeletePost postId={postId} closeModal={closeModal} goToHome={true} />
      {!hideGoToPost && <span onClick={handleGoToPost}>Go to Post</span>}
    </ModalContentWrapper>
  );
};

export const PostWrapper = styled.div`
  width: 615px;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 1.5rem;

  .post-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .psot-header {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .post-header h3 {
    cursor: pointer;
  }

  .post-img {
    width: 100%;
    height: 100%;
  }

  .post-actions {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    padding-bottom: 0.2rem;
  }

  .post-actions svg:last-child {
    margin-left: auto;
  }

  svg {
    margin-right: 1rem;
  }

  .likes-caption-comments {
    padding: 1rem;
    padding-top: 0.3rem;
  }

  .username {
    padding-right: 0.3rem;
  }

  .view-comments {
    color: ${(props) => props.theme.secondaryColor};
    cursor: pointer;
  }

  textarea {
    height: 100%;
    width: 100%;
    border: none;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    resize: none;
    padding: 1rem 0 0 1rem;
    font-size: 1rem;
    font-family: Inter;
  }

  @media screen and (max-width: 690px) {
    width: 99%;
  }
`;

const Post = ({post}) => {
  const comment = useInput("");
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const [newComments, setNewComments] = useState([]);
  const [likesState, setLikes] = useState(post.likesCount);

  const incLikes = () => setLikes(likesState+1);
  const decLikes = () => setLikes(likeState - 1);

  const handleAddComment = (e) => {
    if(e.keycode === 13){
      e.preventDefault();

      client(`/posts/${post._id}/comments`, {
        body: {text: comment.value},
      }).then((resp) => setNewComments([...newComments, resp.data]));
      comment.setValue("");
    }
  };

  return (
    <PostWrapper>
      
    </PostWrapper>
  )
}
