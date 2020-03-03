import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MenuOptionProps {
  active: boolean;
}

export const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

export const MenuOption = styled.li`
  padding: 0 10px;
  &:first-child {
    padding-left: 0;
  }
`;

export const MenuOptionLink = styled(Link)<MenuOptionProps>`
  text-decoration: none;
  color: ${({ theme, active }): string => {
    return (active ? theme.fonts.colors.active : theme.fonts.colors.primary);
  }};
`;
