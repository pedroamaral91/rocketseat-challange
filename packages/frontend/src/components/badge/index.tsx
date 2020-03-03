import React from 'react';

import { Container, Circle, Label } from './styles';

type BadgeProps = {
  label?: string
  color: string
}

const Badge: React.FC<BadgeProps> = ({ label = '', color }) => {
  return (
    <Container color={color}>
      <Circle color={color} />
      {label && <Label color={color}>{label}</Label>}
    </Container>
  );
};

export default Badge;
