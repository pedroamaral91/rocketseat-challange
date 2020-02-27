import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { AuthCreators } from '../../store/modules';

import {
  Container, Content, LogoContainer, Logo, Form, WrapperButton,
} from './styles';

import LogoImage from '../../assets/logo/logo.svg';
import InputLabel from '../../components/inputs/input-label';
import Button from '../../components/button/index';

const { signInRequest } = AuthCreators;
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = useCallback((e: any) => {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  }, [email, password, dispatch]);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src={LogoImage} />
        </LogoContainer>
        <Form>
          <InputLabel label="SEU E-MAIL" handleChange={(e): void => setEmail(e.target.value)} placeholder="email@email.com" value={email} />
          <InputLabel type="password" label="SEU TESTE" handleChange={(e): void => setPassword(e.target.value)} value={password} />
          <WrapperButton>
            <Button type="submit" onClick={handleClick}>Entrar no sistema</Button>
          </WrapperButton>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
