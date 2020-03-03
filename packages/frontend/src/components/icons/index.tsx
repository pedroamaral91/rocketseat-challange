import React from 'react';

import { FaEye, FaPen, FaTrash } from 'react-icons/fa';

export type IconTypes = 'fa-eye' | 'fa-pen' | 'fa-trash'

interface IconProps {
  icon: IconTypes;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const icons = new Map([
    ['fa-eye', <FaEye color="#7D40E7" />],
    ['fa-pen', <FaPen color="#4D85EE" />],
    ['fa-trash', <FaTrash color="#DE3B3B" />],
  ]);

  return icons.get(icon) ?? null;
};

export default Icon;
