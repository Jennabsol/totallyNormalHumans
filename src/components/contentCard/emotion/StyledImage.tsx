import styled from '@emotion/styled';

export const StyledImage = styled.img(() => ({
  height: 'auto',
  maxWidth: '100%',
  minHeight: '100%',
  objectFit: 'cover',
  objectPosition: '50% 50%',
  width: 'auto'
}));
