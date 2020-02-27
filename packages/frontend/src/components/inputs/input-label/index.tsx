import React from 'react';
import { Container, Label, Input } from './styles';

type InputProps = {
  label: string
  value: string
  type?: string
  placeholder?: string
  handleChange: (event: any) => void
}

const InputLabel: React.FC<InputProps> = ({
  label,
  value,
  type,
  handleChange,
  placeholder,
}) => (
  <Container>
    <Label>{label}</Label>
    <Input type={type} value={value} onChange={handleChange} placeholder={placeholder} />
  </Container>
);

export default InputLabel;
