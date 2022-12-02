import styled from '@emotion/styled';
import Flex from 'components/Common/Layout/Flex';
import MaxWidth from 'components/Common/Layout/MaxWidth';
import { pageRoute } from 'lib/utils/const';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { fonts } from 'styles/fonts';

const Header = (): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      <MaxWidth>
        <Flex
          justifyContent='space-between'
        >
          <Link
            href={{ pathname: pageRoute.HOME }}
            passHref
            shallow
          >
            <Image
              src={'/images/logo/moyee-logo.svg'}
              alt={''}
              width={'30'}
              height={'30'}
            />
          </Link>
          <Flex
            gap='25px'
          >
            <Link
              href={{ pathname: pageRoute.HOME }}
              passHref
              shallow
            >
              <Content
                selected={pathname === pageRoute.HOME}
              >
                홈
              </Content>
            </Link>

            <Link
              href={{ pathname: pageRoute.PLAYLIST }}
              passHref
              shallow
            >
              <Content
                selected={pathname === pageRoute.PLAYLIST}
              >
                플레이리스트
              </Content>
            </Link>

            <Link
              href={{ pathname: pageRoute.SHOP }}
              passHref
              shallow
            >
              <Content
                selected={pathname === pageRoute.SHOP}
              >
                나만의굿즈샵
              </Content>
            </Link>
          </Flex>
        </Flex>
      </MaxWidth>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;
  padding: 20px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.background500};
`

const Content = styled.span<{ selected: boolean }>`
  border-bottom: 2px solid ${({ theme, selected }) =>
    selected ? theme.colors.main : theme.colors.background500};
  padding-bottom: 5px;
  font-family: ${({ selected }) =>
    selected ? fonts.pretendard.BOLD : fonts.pretendard.REGULAR};
    color: ${({ theme, selected }) =>
    selected ? theme.colors.text001 : theme.colors.text002};
`

export default memo(Header);