import styled from 'styled-components';
import { lighten } from 'polished';

type BadgeProps = {
  color: string
}

export const Container = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
  padding: 3px 7px;
  border-radius: 1em;
  background-color: ${({ color }): string => lighten(0.5, color)};
`;

export const Circle = styled.div<BadgeProps>`
  display: inline-block;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ color }): string => color};
`;

export const Label = styled.span<BadgeProps>`
  color: ${({ color }): string => color};
  font-weight: ${({ theme }): number => theme.fonts.weight.bold};
`;
