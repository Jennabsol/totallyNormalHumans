import styled from '@emotion/styled';

export const ImageContainer = styled.div(() => ({
  maxWidth: '45.3%',
  zIndex: 2,
  '@media (max-width: 400px)': { display: 'none' }
}));
