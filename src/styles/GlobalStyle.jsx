import { css } from '@emotion/react';

// fontSize 정의
const fontSizeXXl = '1.5rem'; // 24px
const fontSizeXl = '1.25rem'; // 20px
const fontSizeLg = '1.175rem'; //18px
const fontSizeMd = '1rem'; // 16px
const fontSizeSm = '0.875rem'; // 14px
const fontSizeXs = '0.75rem'; // 12px

//color 정의
const colorWhite = '#FFFFFF';
const colorGreen01 = '#5CC6BA';
const colorGreen02 = '#53E6AF';
const colorGreen03 = '#5498C7';
const colorGreen04 = '#103955';
const colorGreen05 = '#457A82';
const colorGreen06 = '#F0F4F3';
const colorGrey01 = '#797979';
const colorGrey02 = '#B8B8B8';

// 티어별 색상 정의
const colorClass01 = '#C0C0C0C0';
const colorClass02 = '#B28753';
const colorClass03 = '#74A3D1';
const colorClass04 = '#D6B534';
const colorClass05 = '#E3242B';
const colorClass06 = '#8B00FF';
const colorClass07 = '#009000';

export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  :root {
    --font-size-xxl: ${fontSizeXXl};
    --font-size-xl: ${fontSizeXl};
    --font-size-lg: ${fontSizeLg};
    --font-size-md: ${fontSizeMd};
    --font-size-sm: ${fontSizeSm};
    --font-size-xs: ${fontSizeXs};

    --color-white: ${colorWhite};
    --color-green-01: ${colorGreen01};
    --color-green-02: ${colorGreen02};
    --color-green-03: ${colorGreen03};
    --color-green-04: ${colorGreen04};
    --color-green-05: ${colorGreen05};
    --color-green-06: ${colorGreen06};
    --color-grey-01: ${colorGrey01};
    --color-grey-02: ${colorGrey02};

    --color-class-01: ${colorClass01};
    --color-class-02: ${colorClass02};
    --color-class-03: ${colorClass03};
    --color-class-04: ${colorClass04};
    --color-class-05: ${colorClass05};
    --color-class-06: ${colorClass06};
    --color-class-07: ${colorClass07};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    /* 중앙 정렬 및 고정 너비 적용 */
    position: relative;
    // transform: translateX(-50%);
    // left: 50%;

    // 모바일 너비 적용
    @media (min-width: 768px) {
      width: 480px;
    }

    /* position: fixed; */
    /* left: 50%; */
  }

  img {
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
