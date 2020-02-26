/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
