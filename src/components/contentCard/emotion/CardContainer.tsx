import styled from '@emotion/styled';

export const CardContainer = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  height: 'auto',
  margin: 'auto',
  overflow: 'hidden',
  position: 'relative',
  width: 'clamp(300px, 75%, 75%)'
}));
