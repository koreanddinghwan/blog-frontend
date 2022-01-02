import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';
import { updatePost } from '../../lib/api/posts';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  //포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      //originalPostId 존재하면 id에 이걸 할당하고, updatePost함수 사용함
      dispatch(updatePost({ title, body, tags, id: originalPostId }));
      return;
    }
    dispatch(
      //아니면 writePost사용
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  //취소
  const onCancel = () => {
    history.goBack();
  };

  //성공 혹은 실패시 처리

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      idEdit={!!originalPostId}
    ></WriteActionButtons>
  );
};

export default withRouter(WriteActionButtonsContainer);
