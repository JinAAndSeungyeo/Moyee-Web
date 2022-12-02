import styled from '@emotion/styled';
import { memo, ReactNode } from 'react';
import { theme } from 'styles/theme';

type MaxWidthStyleProps = {
  maxWidth?: string;
  height?: string;
};

type MaxWidthProps = MaxWidthStyleProps & {
  children: ReactNode;
};

const MaxWidth = ({
  maxWidth = '1400px',
  height,
  children,
}: MaxWidthProps): JSX.Element => {
  return (
    <MaxWidthContainer
      maxWidth={maxWidth}
      height={height}
    >
      {children}
    </MaxWidthContainer>
  );
}

const MaxWidthContainer = styled.div<MaxWidthStyleProps>`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  height: ${({ height }) => height};
  padding: 0 20px;
  margin: 0 auto;
`

export default memo(MaxWidth);