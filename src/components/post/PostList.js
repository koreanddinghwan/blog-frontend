import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../../common/Responsive';
import Button from '../../common/Button';
import SubInfo from '../../common/SubInfo';
import Tags from '../../common/Tags';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &::first-child {
    padding-bottom: 0;
  }

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      ></SubInfo>
      <Tags tags={tags}></Tags>
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, error, loading, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>

      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id}></PostItem>
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
