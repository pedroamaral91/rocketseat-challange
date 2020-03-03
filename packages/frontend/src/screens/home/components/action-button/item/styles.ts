import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.accent};
  align-items: center;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.fonts.colors.secondary};
  font-size: 12px;
  padding: 0 10px;
`;
