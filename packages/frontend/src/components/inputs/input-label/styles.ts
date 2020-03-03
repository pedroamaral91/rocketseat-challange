import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.span`
  font-weight: 600;
  margin: 5px 0;
  font-size: 12px;
  color: ${({ theme }): string => theme.fonts.colors.active};
`;

export const Input = styled.input.attrs(({ type }) => ({
  type,
}))`
  border: 0;
  border: ${({ theme }): string => `thin solid ${theme.border.colors.primary}`};
  border-radius: 4px;
  padding: 10px;
  color: ${({ theme }): string => theme.fonts.colors.primary};
`;
