import styled from '@emotion/styled';
import type { themeType } from '../../../context/theme/defaultTheme';

type props = {
  theme: themeType;
};

export const StyledButton = styled.button<props>(({ theme }) => ({
  background: theme.secondary,
  border: 'none',
  borderRadius: '24px',
  color: theme.primary,
  padding: '7px 37px',
  '&:hover': {
    background: '#5f5f5f'
  }
}));
