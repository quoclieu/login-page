import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Heading = styled.h1`
  font-size: 30px;
  color: #4e7dc1;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 18px;
  height: 30px;
  border-radius: 5px;
  padding: 8px;
  border: 2px solid #f3f5f7;
  background-color: #f3f5f7;
  &:focus {
    outline: none;
    border: 2px solid #88c4f9;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;

const LoginBtn = styled.button`
  font-size: 18px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #88c4f9;
  background-color: #88c4f9;
  color: white;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #4e7dc1;
  }
`;

const ErrorMsg = styled.p`
  color: red;
`;

const LoginPage = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (password === 'password') {
      props.setUsername(username);
      props.history.push('/welcome');
    } else {
      setError(true);
    }
  };

  return (
    <PageContainer>
      <Form>
        <Heading>Log In to Neami National</Heading>
        <Input
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <LoginBtn type="submit" onClick={handleSubmit}>
          Login
        </LoginBtn>
      </Form>
      {isError && <ErrorMsg>Password is incorrect</ErrorMsg>}
    </PageContainer>
  );
};

export default withRouter(LoginPage);
