import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';

export const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }): string => theme.colors.main};
  padding: 0 20px;
`;

export const Logo = styled.div`
  width: 90px;
  height: 100%;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Divisor = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }): string => theme.colors.info};
  border-top: 10px solid white;
  border-bottom: 10px solid white; 
`;
