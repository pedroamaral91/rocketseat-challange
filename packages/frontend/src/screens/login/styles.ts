/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 425px;
  box-shadow: 0px 0px 10px #00000033;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
`;

export const LogoContainer = styled.div`
  align-self: center;
  width: 100%;
  height: 80px;
  padding: 20px;
  margin-top: 40px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  color: ${({ theme }) => theme.colors.main};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;

export const WrapperButton = styled.div`
  margin: 15px 0;
`;
