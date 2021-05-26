import styled from '@emotion/styled';

export const ContentTextContainer = styled.div(() => ({
  alignItems: 'flex-end',
  display: 'flex',
  flex: '4 1 4ch',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginBottom: '10%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20%',
  padding: '16px 32px',
  zIndex: 2,
  '@media screen and (max-width: 400px)': { margin: 'auto', width: '100%' },
  '@media screen and (max-width: 800px)': {
    alignContent: 'center',
    marginTop: '10%'
  }
}));
