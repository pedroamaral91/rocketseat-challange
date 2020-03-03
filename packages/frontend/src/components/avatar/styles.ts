import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.span`
  width: 40px;
  height: 40px;
  background: #F4EFFC 0% 0% no-repeat padding-box;
  border-radius: 20px;
  padding: 7px;
  color: ${darken(0.3, '#F4EFFC')};
  margin-right: 5px;
`;
