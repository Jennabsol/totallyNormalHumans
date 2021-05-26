import styled from '@emotion/styled';

export const ImageContainer = styled.div(() => ({
  alignItems: 'center',
  display: 'flex',
  flex: '3 1 30ch',
  flexWrap: 'wrap',
  overflow: 'hidden',
  zIndex: 2,
  '@media screen and (max-width: 400px)': { display: 'none' },
  '@media screen and (max-width: 800px)': { flex: '4 1 100ch' }
}));
