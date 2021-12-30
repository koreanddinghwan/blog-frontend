import React from 'react';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <PostViewerContainer></PostViewerContainer>
    </>
  );
};

export default PostPage;
