import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 30px;
  color: #4e7dc1;
`;

const WelcomePage = ({ username }) => {
  return (
    <PageContainer>
      <Heading>Welcome {username}</Heading>
    </PageContainer>
  );
};

export default WelcomePage;
