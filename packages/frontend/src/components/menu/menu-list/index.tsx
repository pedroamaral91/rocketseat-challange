import React from 'react';

import { Menu } from './styles';
import MenuOption from './menu-option';

const MenuList: React.FC = () => {
  return (
    <Menu>
      <MenuOption path="/" label="ENCOMENDAS" />
      <MenuOption path="/deliveryman" label="ENTREGADORES" />
      <MenuOption path="/recipient" label="DESTINATÁRIOS" />
      <MenuOption path="/problem" label="PROBLEMAS" />
    </Menu>
  );
};

export default MenuList;
