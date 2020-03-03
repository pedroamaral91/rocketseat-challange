import React from 'react';
import { Grid } from '../../components/grid-system';
import { Title } from '../../../../components/texts/index';

const TableHeader: React.FC = () => (
  <Grid>
    <Title fontSize="15px">ID</Title>
    <Title fontSize="15px">Destinatário</Title>
    <Title fontSize="15px">Entregador</Title>
    <Title fontSize="15px">Cidade</Title>
    <Title fontSize="15px">Estado</Title>
    <Title fontSize="15px">Status</Title>
    <Title fontSize="15px">Ações</Title>
  </Grid>
);


export default TableHeader;
