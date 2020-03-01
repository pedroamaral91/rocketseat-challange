import styled, { css } from 'styled-components';


interface CustomButtonTypes {
  isLoading: boolean
}

export const ButtonAttrs = styled.button.attrs<CustomButtonTypes>(({ isLoading }) => ({
  disabled: isLoading,
}))``;

export const Button = styled(ButtonAttrs)<CustomButtonTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  color: ${({ theme }): string => theme.colors.accent};
  border-radius: 4px;
  background-color: ${({ theme }): string => theme.colors.main};
  font-weight: ${({ theme }): number => theme.fonts.weight.bold};
  ${({ isLoading }) => isLoading && css`
    cursor: not-allowed;
    opacity: 0.8;
  `}
`;
