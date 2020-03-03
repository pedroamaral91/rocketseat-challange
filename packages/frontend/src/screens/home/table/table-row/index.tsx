import React from 'react';

import { Container, CellContent } from './styles';
import { Grid } from '../../components/grid-system/index';
import Avatar from '../../../../components/avatar';
import { useTheme } from '../../../../hooks';
import Badge from '../../../../components/badge/index';
import ActionButton from '../../components/action-button';

const TableRow: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <Grid>
        <CellContent>#001</CellContent>
        <CellContent>Ludwig van Beethoven</CellContent>
        <CellContent>
          <Avatar fullName="Pedro Amaral" />
          Pedro Amaral
        </CellContent>
        <CellContent>São Luiz do Maranhão</CellContent>
        <CellContent>Maranhão</CellContent>
        <CellContent>
          <Badge color={theme.colors.success} label="ENTREGUE" />
        </CellContent>
        <CellContent>
          <ActionButton />
        </CellContent>
      </Grid>
    </Container>
  );
};

export default TableRow;
