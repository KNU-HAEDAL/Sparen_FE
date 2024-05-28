import styled from '@emotion/styled';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const NavigateBarLayout = styled.div`
  display: flex;
  padding: 0.8rem 0;
  justify-content: space-between;
  background-color: #f1f1f1;

  /** 하단 고정 */
  /* position: fixed; */
  /* transform: translateY(-100%); */
  /* width: 100%; */
  /* bottom: 0; */
  /* left: 0; */
  /* height: 3.4375rem; */

  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  border-top: 0.5px solid #bdc5cd;
  background: #fafafa;
`;

export const IconContainer = styled.div`
  width: 1.9375rem;
  height: 1.9375rem;
  flex-shrink: 0;
`;

export const NavIcon = styled.img``;
