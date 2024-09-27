import styled from '@emotion/styled';

export const ProfileImageBox = styled.div<{ size?: number }>`
  width: ${({ size }) => (size ? `${size}rem` : '2rem')};
  height: ${({ size }) => (size ? `${size}rem` : '2rem')};
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  /* overflow: hidden; */

  /* 이미지 가운데 정렬  */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
