import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/post/PostListContainer';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <PostListContainer></PostListContainer>
    </div>
  );
};

export default PostListPage;
