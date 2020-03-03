import React from 'react';

import { Container, Text } from './styles';

import Icon, { IconTypes } from '../../../../../components/icons';

interface ItemProps {
  icon: IconTypes;
  label: string;
}

const Item: React.FC<ItemProps> = ({ icon, label }) => (
  <Container>
    <Icon icon={icon} />
    <Text>{label}</Text>
  </Container>
);

export default Item;
