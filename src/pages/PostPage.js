import React from 'react';
import PostViewer from '../components/post/PostViewer';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <PostViewer></PostViewer>
    </>
  );
};

export default PostPage;
