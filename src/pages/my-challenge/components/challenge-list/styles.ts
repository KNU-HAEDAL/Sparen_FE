import styled from '@emotion/styled';

export const ChallengeListLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #d4d6dd;
  background: #fff;
`;
export const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
  width: 100%;
`;
export const ChallengeImgContainer = styled.div`
  display: flex;
  border-radius: 100%;
  border: 1px dashed #c0c0c0;
  padding: 2px;
  text-align: center;
  width: 2.5rem;
`;

export const ReviewContainer = styled.div<{
  bgColor?: string;
  borderColor?: string;
}>`
  display: flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  height: 1.001rem;
  border-radius: 0.625rem;
  margin: 1rem;
  background-color: ${(props) => props.bgColor || 'var(--color--green-01)'};
  border: 1px solid;
  border-color: ${(props) => props.borderColor || 'var(--color--green-01)'};
`;
