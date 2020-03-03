import React from 'react';

import { Contanier } from './styles';
import Item from '../item/index';
import { Divider } from '../../../../../components/divider';

interface MenuActionProps {
  isOpen: boolean
}

const MenuActionButton: React.FC<MenuActionProps> = ({ isOpen }) => (
  <Contanier isOpen={isOpen}>
    <Item icon="fa-eye" label="Visualizar" />
    <Divider />
    <Item icon="fa-pen" label="Editar" />
    <Divider />
    <Item icon="fa-trash" label="Excluir" />
  </Contanier>
);

export default MenuActionButton;
