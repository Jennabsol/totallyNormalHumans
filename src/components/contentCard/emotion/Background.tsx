import styled from '@emotion/styled';
import type { themeType } from '../../../context/theme/defaultTheme';

type props = {
  theme: themeType;
};

export const Background = styled.div<props>(({ theme }) => ({
  background: theme.background,
  border: 'solid',
  borderColor: '#2aa6f9',
  bottom: 0,
  display: 'block',
  height: '80%',
  position: 'absolute',
  width: '100%',
  zIndex: 1
}));
