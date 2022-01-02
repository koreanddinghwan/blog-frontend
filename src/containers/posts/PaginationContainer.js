import React from 'react';
import Pagination from '../../components/posts/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({ location, match }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  //포스트 데이터가 없거나 로딩중이면 아무것도 보여주지 않음
  if (!posts || loading) return null;
  const { username } = match.params;
  console.log('페이지네이션', lastPage);

  //page가 없으면 1을 기본값으로
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      page={parseInt(page, 10)}
      tag={tag}
      lastPage={lastPage}
      username={username}
    ></Pagination>
  );
};

export default withRouter(PaginationContainer);
