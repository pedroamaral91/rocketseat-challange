import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authSelectors } from '../../store/modules';

import {
  Container, Content, LogoContainer, Logo,
} from './styles';
import LogoImage from '../../assets/logo/logo.svg';
import LoginForm from './login-form';

const { getIsSigned, getIsLoading } = authSelectors;
const Login: React.FC = () => {
  const history = useHistory();
  const isSigned = useSelector(getIsSigned);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (isSigned) {
      history.push('/');
    }
  }, [history, isSigned]);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src={LogoImage} />
        </LogoContainer>
        <LoginForm isLoading={isLoading} />
      </Content>
    </Container>
  );
};

export default Login;
