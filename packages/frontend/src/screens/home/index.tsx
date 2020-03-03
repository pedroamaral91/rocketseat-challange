import React, { useCallback } from 'react';

import { Container, Title, Wrapper } from './styles';

import InputSearch from '../../components/inputs/input-search';
import { ButtonIcon } from '../../components/buttons';
import Table from './table';

const Home: React.FC = () => {
  const handleChangeQuery = useCallback((query) => {
    console.log(query);
  }, []);

  return (
    <Container>
      <Title>Gerenciando encomendas</Title>
      <Wrapper>
        <InputSearch handleChangeQuery={handleChangeQuery} />
        <ButtonIcon label="CADASTRAR" icon="plus" />
      </Wrapper>
      <Table />
    </Container>
  );
};

export default Home;
