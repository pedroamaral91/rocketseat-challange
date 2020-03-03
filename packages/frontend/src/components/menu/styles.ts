import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }): string => theme.border.colors.primary};
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
  margin: 0 30px;
  height: 100%;
  background-color: ${({ theme }): string => theme.border.colors.primary};
  border-top: 15px solid white;
  border-bottom: 15px solid white;
`;
