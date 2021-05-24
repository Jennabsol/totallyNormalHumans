import styled from '@emotion/styled';
import type { themeType } from '../../../context/theme/defaultTheme';

type props = {
  theme: themeType;
};

export const StyledBodyText = styled.p<props>(({ theme }) => ({
  color: theme.primary,
  fontSize: '2.1rem',
  marginTop: '6px',
  textAlign: 'right'
}));
