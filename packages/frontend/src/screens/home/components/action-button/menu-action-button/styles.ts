import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Contanier = styled.div<ContainerProps>`
  position: absolute;
  opacity: 1;
  top: 2.8em;
  left: -4.5em;
  width: 150px;
  height: fit-content;
  background: white;
  box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  ${({ isOpen }) => {
    if (!isOpen) {
      return css`
      visibility: hidden;
      opacity: 0;
      transform: scale(0, 0);
      transition: visibility 0.3s ease, opacity 0.3s ease, transform 1s ease-in;
    `;
    }
    return css`
      transition: visibility 0.5s ease, opacity 0.5s ease;
    `;
  }
};
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;    
    top: 0.1em;
    left: 50%;
    border: 0.5em solid black;
    border-color: transparent transparent white white;
    transform-origin: 0 0;
    transform: rotate(135deg);
    box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 0.1);
  }
`;
