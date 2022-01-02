import React from 'react';
import Responsive from '../common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import { Helmet } from 'react-helmet-async';
const WritePage = () => {
  return (
    <>
      <Helmet>
        <title>글 작성하기 - DevLog</title>
      </Helmet>
      <HeaderContainer></HeaderContainer>
      <EditorContainer></EditorContainer>
      <Responsive>
        <TagBoxContainer></TagBoxContainer>
        <WriteActionButtonsContainer></WriteActionButtonsContainer>
      </Responsive>
    </>
  );
};

export default WritePage;
