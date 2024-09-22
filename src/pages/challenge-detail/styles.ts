import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3.44rem; // 하단 내브 바 높이
`;

export const ImageMask = styled.div`
  background-color: var(--color-green-06);
  position: relative;
  margin: 0 0 16px;
`;

export const Image = styled.img`
  position: relative;
  margin: auto;
  display: block;
  height: 40%;
  opacity: 20%;
  object-fit: cover;
  filter: grayscale(100%);
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
