import styled from 'styled-components';

type TitleProps = {
  fontSize?: string
}

export const Title = styled.span<TitleProps>`
  font-weight: ${({ theme }):number => theme.fonts.weight.bold};
  font-size: ${({ fontSize }):string => (fontSize || '16px')};
`;
