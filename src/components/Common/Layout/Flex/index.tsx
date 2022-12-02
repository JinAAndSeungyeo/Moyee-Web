import styled from '@emotion/styled';
import { memo, ReactNode } from 'react';

type FlexStyleProps = {
  gap?: string;
  flexDirection?: string;
  flexWrap?: string;
  alignContent?: string;
  justifyContent?: string;
  alignItems?: string;
};

type FlexProps = FlexStyleProps & {
  children: ReactNode;
};

const Flex = ({
  gap,
  flexDirection = 'row',
  flexWrap,
  alignContent,
  justifyContent = 'center',
  alignItems = 'center',
  children,
}: FlexProps): JSX.Element => {
  return (
    <FlexContainer
      gap={gap}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      alignContent={alignContent}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexStyleProps>`
  display: flex;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  align-content: ${({ alignContent }) => alignContent};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`

export default memo(Flex);