import styled from '@emotion/styled';
import type { themeType } from '../../../context/theme/defaultTheme';

type props = {
  theme: themeType;
};

export const StyledHeadline = styled.p<props>(({ theme }) => ({
  color: theme.secondary,
  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
  fontWeight: 'bold',
  margin: 0
}));
