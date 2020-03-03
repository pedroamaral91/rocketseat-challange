import styled from 'styled-components';

export const Divider = styled.div`
  width: 95%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.disabled};
  margin: 0 auto;
`;
