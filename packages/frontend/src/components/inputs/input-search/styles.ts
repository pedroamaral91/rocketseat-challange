import styled from 'styled-components';
import { Input as InputTemplate } from '../input-label/styles';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const WrapperIcon = styled.div`
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  left: 10px;
  height: fit-content;
`;

export const Input = styled(InputTemplate)`
  padding-left: 30px;
  width: 237px;
  height: 36px;
`;
