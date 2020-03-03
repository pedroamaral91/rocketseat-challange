import { useContext } from 'react';
import { ThemeContext, DefaultTheme } from 'styled-components';

const useTheme = (): DefaultTheme => useContext(ThemeContext);

export default useTheme;
