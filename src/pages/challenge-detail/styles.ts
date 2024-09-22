import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3.44rem; // 하단 내브 바 높이
`;

export const ImageList = styled.div`
  margin: 0 0 16px;
  height: 100vw;
  max-height: 480px; // 최대 너비가 480px라서 고정값으로 설정한 것임
  display: flex;
  overflow-x: scroll;
`;

export const Image = styled.img`
  position: relative;
  margin: auto;
  align-self: center;
  display: block;
  object-fit: cover;
  width: 100%;
`;

export const DefaultImageMask = styled.div`
  background-color: var(--color-green-06);
  position: relative;
  width: 100vw;
  display: flex;
`;

export const DefaultImage = styled.img`
  position: relative;
  margin: auto;
  align-self: center;
  display: block;
  object-fit: cover;
  opacity: 50%;
`;

export const ChallengeTitleWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Category = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-green-01);
`;

export const Title = styled.div`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;
