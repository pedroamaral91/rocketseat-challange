import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  background-color: ${({ theme }): string => theme.background.primary};
  height: 100%;
  padding: 5% 5% 0;
`;
