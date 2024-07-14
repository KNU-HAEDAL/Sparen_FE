import styled from '@emotion/styled';

export const TierLayout = styled.div<{ height?: string }>`
  /* height: 9.3125rem; */
  height: 9.3125rem;
  width: 21rem;
  flex-shrink: 0;
  margin: 1rem 1rem 3rem 1rem;
  border-radius: 1.25rem;
  border: 1px solid #d4d6dd;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ProfileImg = styled.img`
  flex: 1 0 0;
  align-self: stretch;
`;

export const InfoContainer = styled.div`
  display: inline-flex;
  /* padding: 0.625rem; */
  padding: 1rem;
  align-items: center;
  gap: 0.625rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 4.6875rem;
  height: 4.6875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-radius: 6.25rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
