import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTheme } from '../../../hooks';

import { Container, WrapperIcon, Input } from './styles';

let timeout: any = null;

type InputProps = {
  handleChangeQuery: (query: string) => void;
};
const InputSearch: React.FC<InputProps> = ({ handleChangeQuery }) => {
  const theme = useTheme();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => handleChangeQuery(query), 500);
    return (): void => timeout && clearTimeout(timeout);
  });

  return (
    <Container>
      <WrapperIcon>
        <FaSearch color={theme.fonts.colors.primary} />
      </WrapperIcon>
      <Input
        placeholder="Buscar por encomendas"
        onChange={(e): void => setQuery(e.target.value)}
      />
    </Container>
  );
};

export default InputSearch;
