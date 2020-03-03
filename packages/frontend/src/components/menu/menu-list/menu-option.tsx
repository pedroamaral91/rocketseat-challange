import React, { useMemo } from 'react';

import { useLocation } from 'react-router-dom';
import { MenuOption as Option, MenuOptionLink } from './styles';

interface MenuOptionProps {
  path: string;
  label: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ path, label }) => {
  const location = useLocation();
  const isActive = useMemo(() => location.pathname === path, [location.pathname, path]);
  console.log({ isActive, path });
  return (
    <Option>
      <MenuOptionLink to={path} active={isActive}>{label}</MenuOptionLink>
    </Option>
  );
};

export default MenuOption;
