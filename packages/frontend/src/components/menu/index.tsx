import React from 'react';
import {
  Logo, Divisor, Header,
} from './styles';

import MenuList from './menu-list/index';

const Menu: React.FC = () => (
  <Header>
    <Logo />
    <Divisor />
    <MenuList />
  </Header>
);

export default Menu;
