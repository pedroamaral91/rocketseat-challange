import React from 'react';

import { Container } from './styles';
import TableHeader from './table-header';
import TableRow from './table-row';

const Table: React.FC = () => {
  return (
    <Container>
      <TableHeader />
      <TableRow />
    </Container>
  );
};

export default Table;
