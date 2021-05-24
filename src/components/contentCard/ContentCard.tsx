import { Background } from './emotion/Background';
import { CardContainer } from './emotion/CardContainer';
import { ContentTextContainer } from './emotion/ContentTextContainer';
import type { FunctionComponent } from 'react';
import { ImageContainer } from './emotion/ImageContainer';
import { StyledBodyText } from './emotion/StyledBodyText';
import { StyledButton } from './emotion/StyledButton';
import { StyledHeadline } from './emotion/StyledHeadline';
import { StyledImage } from './emotion/StyledImage';
import { useTheme } from '../../context/theme/useTheme';

type Props = {
  body: string;
  button?: { text: string; onClick: () => void };
  headline: string;
  imageUrl: string;
};

export const ContentCard: FunctionComponent<Props> = ({
  body,
  button,
  headline,
  imageUrl
}) => {
  const theme = useTheme();
  return (
    <div>
      <CardContainer>
        <ImageContainer>
          <StyledImage src={imageUrl}></StyledImage>
        </ImageContainer>
        <ContentTextContainer>
          <StyledHeadline theme={theme}>{headline}</StyledHeadline>
          <StyledBodyText theme={theme}>{body}</StyledBodyText>
          {button && (
            <StyledButton theme={theme} onClick={button?.onClick}>
              {button?.text}
            </StyledButton>
          )}
        </ContentTextContainer>
        <Background theme={theme}></Background>
      </CardContainer>
    </div>
  );
};
