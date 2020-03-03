import React, { useState, useCallback } from 'react';

import { Container, Button } from './styles';
import MenuActionButton from './menu-action-button';

const ActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => setIsOpen((currState) => !currState), []);
  return (
    <Container>
      <Button onClick={handleClick}>...</Button>
      <MenuActionButton isOpen={isOpen} />
    </Container>
  );
};

export default ActionButton;
