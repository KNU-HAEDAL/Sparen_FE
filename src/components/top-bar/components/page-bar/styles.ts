import styled from '@emotion/styled';

export const PageBarLayout = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
  cursor: pointer;
  gap: 1rem;
  background-color: ${(props) => props.backgroundColor};
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyBox = styled.div`
  display: flex;
  width: 2.8125rem;
  height: 1.6875rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const PrevButtonBox = styled.div`
  display: flex;
  width: 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 0.625rem;
`;

export const prevbtn = styled.img`
  width: 0.83744rem;
  height: 1.45488rem;
  flex-shrink: 0;
`;
