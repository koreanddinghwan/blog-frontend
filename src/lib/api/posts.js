//포스트에 관련된 api를 요청하는 함수
import client from './client';
import qs from 'qs';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

//id로 서버에 get 요청 날리기
export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ username, page, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  console.log(queryString);
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, { title, body, tags });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
