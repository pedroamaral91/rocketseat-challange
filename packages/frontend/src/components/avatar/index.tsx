import React, { useMemo } from 'react';
import { Container } from './styles';

type AvatarProps = {
  imageURI?: string
  fullName: string
}

const Avatar: React.FC<AvatarProps> = ({
  imageURI = '',
  fullName,
}) => {
  const name = useMemo(() => {
    const fullNameArray = fullName.split(' ');
    return `${fullNameArray[0].charAt(0)}${fullNameArray[1].charAt(0)}`;
  }, [fullName]);
  return <Container>{imageURI ? (<div />) : (name)}</Container>;
};

export default Avatar;
