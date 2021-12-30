import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $gray-3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px reba(0, 0, 0, 0.025);
  width: 360px;
  padding: 2rem;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">Devlog</Link>
          {children}
        </div>
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
