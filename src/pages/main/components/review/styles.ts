import styled from '@emotion/styled';

// import { Swiper } from 'swiper/react';

// const StyledSwiper = styled(Swiper)`
//   width: 100%;
//   height: fit-content;
//   padding: 16px;
//   background-color: #eee !important;
//   border-radius: 10px;
//   cursor: grabbing;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   .swiper-slide {
//     width: fit-content !important;
//     background-color: transparent !important;
//   }
// `;

export const ReviewLayout = styled.div`
  display: flex;
  height: 15.5625rem;
  padding: 0.9375rem 4.8125rem 0.9375rem 0.8125rem;
  align-items: center;
  flex-shrink: 0;
  margin: 1rem;

  border-radius: 1.25rem;
  background: var(--green--06, rgba(240, 244, 243, 0.75));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ChallengeLayout = styled.div`
  width: 18rem;
  height: 13.6875rem;
  padding: 1rem;
  border-radius: 1.25rem;
  background: var(--green--01, #5cc6ba);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const StarContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  gap: 0.2rem;
`;

export const StarImg = styled.img`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const ReviewProfileContainer = styled.div`
  display: flex;
  margin: 1rem 0.5rem;
  flex-direction: row;
  justify-content: space-between;
  width: 5.5rem;
  align-items: center;
  gap: 0.25rem;
`;

export const ReviewContents = styled.div`
  width: 100%;
  /* justify-content: left; */
`;
