import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading[`post/READ_POST`],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    return () => dispatch(unloadPost());
  }, [dispatch, postId]);

  //수정버튼이벤트
  const onEdit = () => {
    dispatch(setOriginalPost(post)); //스토어에서 post가져와서 디스패치
    history.push('/write'); //write페이지로 이동
  };

  const onRemove = async () => {
    try {
      await removePost(postId); //현재 페이지의 ID담아서 api호출
      history.push('/'); //삭제하고 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  //포스트의 소유자확인
  //리덕스의 user와 유저아이디, post와 post의 소유자의 아이디 비교
  // console.log('user', user, 'user._id', user._id);
  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
      post={post}
      error={error}
      loading={loading}
    ></PostViewer>
  );
};

export default withRouter(PostViewerContainer);
