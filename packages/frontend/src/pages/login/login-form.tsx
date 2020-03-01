import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { AuthCreators } from '../../store/modules';

import { Form, WrapperButton } from './styles';
import InputLabel from '../../components/inputs/input-label';
import { ButtonLoading } from '../../components/buttons';

const { signInRequest } = AuthCreators;

interface LoginFormProps {
  isLoading: boolean
}

const LoginForm: React.FC<LoginFormProps> = ({ isLoading }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    [],
  );

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    [],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      dispatch(signInRequest(email, password));
    },
    [email, password, dispatch],
  );

  return (
    <Form>
      <InputLabel
        label="SEU E-MAIL"
        handleChange={handleEmail}
        placeholder="email@email.com"
        value={email}
      />
      <InputLabel
        type="password"
        label="SUA SENHA"
        placeholder="******"
        handleChange={handlePassword}
        value={password}
      />
      <WrapperButton>
        <ButtonLoading type="submit" onClick={handleClick} isLoading={isLoading}>
          Entrar no Sistema
        </ButtonLoading>
      </WrapperButton>
    </Form>
  );
};

export default LoginForm;
