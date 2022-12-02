export const fonts = {
  pretendard: {
    EXTRA_BOLD: 'Pretendard-ExtraBold',
    BOLD: 'Pretendard-Bold',
    SEMI_BOLD: 'Pretendard-SemiBold',
    MEDIUM: 'Pretendard-Medium',
    REGULAR: 'Pretendard-Regular',
  },
};

export const fontPaths = {
  pretendard: {
    EXTRA_BOLD: '/font/pretendard/pretendard-bold.woff2',
    BOLD: '/fonts/pretendard/pretendard-bold.woff2',
    SEMI_BOLD: '/fonts/pretendard/pretendard-semi-bold.woff2',
    MEDIUM: '/fonts/pretendard/pretendard-medium.woff2',
    REGULAR: '/fonts/pretendard/pretendard-regular.woff2',
  },
};

export const fontFamilies = `
  @font-face {
    src: url(${fontPaths.pretendard.REGULAR}) format('woff2');
    font-family: ${fonts.pretendard.REGULAR};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPaths.pretendard.MEDIUM}) format('woff2');
    font-family: ${fonts.pretendard.MEDIUM};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPaths.pretendard.BOLD}) format('woff2');
    font-family: ${fonts.pretendard.BOLD};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url( ${fontPaths.pretendard.EXTRA_BOLD}) format('woff2');
    font-family: ${fonts.pretendard.EXTRA_BOLD};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url( ${fontPaths.pretendard.SEMI_BOLD}) format('woff2');
    font-family: ${fonts.pretendard.SEMI_BOLD};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
`;