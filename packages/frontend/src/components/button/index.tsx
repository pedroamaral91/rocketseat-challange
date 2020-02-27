import React from 'react';

import { Button as ButtonComponent } from './styles';

type ButtonTypes = {
  children: string;
  onClick(e: any): void;
  type?: 'submit' | 'button' | 'reset' | undefined;
};

const Button: React.FC<ButtonTypes> = ({ children, onClick, type }) => (
  <ButtonComponent onClick={onClick} type={type}>
    {children}
  </ButtonComponent>
);

export default Button;
