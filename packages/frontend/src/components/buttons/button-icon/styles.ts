import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  width: 142px;
  height: 36px;
  background-color: ${({ theme }): string => theme.colors.main};
  font-size: 15px;
  font-weight: ${({ theme }): number => theme.fonts.weight.bold};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
`;

export const Text = styled.span`
  color: ${({ theme }): string => theme.colors.accent};
  padding-right: 15px;
`;
