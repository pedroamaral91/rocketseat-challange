import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.span`
  font-size: 24px;
  font-weight: ${({ theme }): number => theme.fonts.weight.bold};
  color: ${({ theme }): string => theme.fonts.colors.active};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
