import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }): string => theme.colors.accent};
  margin: 15px 0;
  width: 100%;
  height: 57px;
  align-items: center;
`;

export const CellContent = styled.span`
  font-size: 0.725rem;
  color: ${({ theme }): string => theme.fonts.colors.secondary};
`;
