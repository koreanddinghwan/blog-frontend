import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header onLogout={onLogout} user={user}></Header>;
};

export default HeaderContainer;
