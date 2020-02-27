import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 45px;
  color: ${({ theme }): string => theme.colors.accent};
  border-radius: 4px;
  background-color: ${({ theme }): string => theme.colors.main};
  font-weight: ${({ theme }): number => theme.fonts.weight.bold};
`;
