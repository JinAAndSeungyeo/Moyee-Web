import styled from '@emotion/styled';
import Flex from 'components/Common/Layout/Flex';
import MaxWidth from 'components/Common/Layout/MaxWidth';
import { memo } from 'react';
import { fonts } from 'styles/fonts';
import { fontSize } from 'styles/fontSize';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <MaxWidth>
        <Flex
          justifyContent='space-between'
          alignItems='baseline'
        >
          <Flex
            gap='10px'
            flexDirection='column'
            alignItems='flex-start'
          >
            <TeamName>🍀 JIN-A_AND_SEUNG-YEO</TeamName>
            <TeamDescription>
              본 프로젝트는 2인 개발로, 기획 / 디자인 / FE(WEB | ANDROID) / BE를 진행하였습니다.
            </TeamDescription>
            <TeamDescription>
              Copyright © 2022 JinAandSeungYeo. All rights reserved
            </TeamDescription>
          </Flex>

          <Flex
            gap='30px'
            padding='5px'
          >
            <a
              href='https://github.com/JinAAndSeungyeo'
              target='_blank'
              rel='noreferer'
            >
              <BsGithub size={24} />
            </a>

            <a
              href='https://www.instagram.com/sseung._.416/'
              target='_blank'
              rel='noreferer'
            >
              <BsInstagram size={24} />
            </a>

            <a
              href='https://www.instagram.com/1o7o1q/'
              target='_blank'
              rel='noreferer'
            >
              <BsInstagram size={24} />
            </a>
          </Flex>
        </Flex>
      </MaxWidth>
    </FooterContainer >
  );
}

const FooterContainer = styled.div`
  width: 100%;
  padding: 30px 0;
`

const TeamName = styled.span`
  letter-spacing: 0.5px;
  font-size: ${fontSize.large};
  font-family: ${fonts.pretendard.BOLD};
`

const TeamDescription = styled.p`
  font-size: ${fontSize.regular};
  font-family: ${fonts.pretendard.REGULAR};
  color: ${({ theme }) => theme.colors.text002};

  &:last-child {
    font-size: ${fontSize.small};
  }
`

export default memo(Footer);