import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { useTheme } from '../../../hooks';
import { Container, Text } from './styles';

type ButtonProps = {
  icon: string
  label: string
}

const ButtonIcon: React.FC<ButtonProps> = ({ icon, label }) => {
  const theme = useTheme();

  const icons: any = {
    plus: <FaPlus color={theme.colors.accent} />,
  };

  return (
    <Container>
      {icons[icon]}
      <Text>{label}</Text>
    </Container>
  );
};

export default ButtonIcon;
