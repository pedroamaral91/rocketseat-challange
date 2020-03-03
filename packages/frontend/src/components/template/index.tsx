import React from 'react';
import Menu from '../menu';
import { Container, Content } from './styles';

const AppTemplate: React.FC = ({ children }) => (
  <Container>
    <Menu />
    <Content>
      {children}
    </Content>
  </Container>
);

export default AppTemplate;
