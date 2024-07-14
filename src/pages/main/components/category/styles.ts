import styled from '@emotion/styled';

export const CategoryLayout = styled.div`
  display: flex;
  padding: 0rem 0.625rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CategoryButtonContainer = styled.div`
  display: flex;
  padding: 0.3125rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
`;

export const CategoryButton = styled.div`
  display: flex;
  width: 4.375rem;
  height: 4.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid #d4d6dd;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const CategoryButtonImage = styled.img`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
`;
