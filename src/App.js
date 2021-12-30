import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <div>
      <>
        <Route
          component={PostListPage}
          path={['/@:username', '/']}
          exact
        ></Route>
        <Route component={LoginPage} path="/login"></Route>
        <Route component={RegisterPage} path="/register"></Route>
        <Route component={WritePage} path="/write"></Route>
        <Route component={PostPage} path="/@:username/:postId"></Route>
      </>
    </div>
  );
}

export default App;
