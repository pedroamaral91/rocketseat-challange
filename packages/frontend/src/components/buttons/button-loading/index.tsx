import React from 'react';

import { Button } from './styles';

import Loading from '../../loading';

type ButtonTypes = {
  children: React.ReactNode;
  onClick(e: React.MouseEvent): void;
  type?: 'submit' | 'button' | 'reset' | undefined;
  isLoading: boolean
};

const ButtonLoading: React.FC<ButtonTypes> = ({
  children, onClick, type, isLoading,
}) => (
  <Button onClick={onClick} type={type} isLoading={isLoading}>
    {isLoading ? <Loading /> : children}
  </Button>
);

export default ButtonLoading;
