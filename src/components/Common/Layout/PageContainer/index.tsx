import styled from '@emotion/styled';
import { memo, ReactNode } from 'react';

type PageConatinerProps = {
  children: ReactNode;
}


const PageContainer = ({
  children,
}: PageConatinerProps): JSX.Element => {
  return (
    <PageContainerWrapper>
      {children}
    </PageContainerWrapper>
  );
}

const PageContainerWrapper = styled.div`
  padding: 20px 0;
  padding-top: 75px;
`

export default memo(PageContainer);