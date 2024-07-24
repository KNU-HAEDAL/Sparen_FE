import styled from '@emotion/styled';

export const DashBoardBox = styled.div`
  /* width: 24.375rem; */
  height: 14.625rem;
  flex-shrink: 0;

  border-radius: 0rem 0rem 0.625rem 0.625rem;
  background: var(--green--06, #f0f4f3);
`;

export const LeaveBox = styled.div`
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  align-items: center;

  /* width: 100%; Make Box take the full width */
  padding-right: 1rem;
  /* optional: Add padding to right side; */
`;

export const LeaveBtn = styled.div`
  display: inline-flex;
  padding: 0.1875rem 0.5625rem 0.1875rem 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 0.5rem;
  background-color: var(--color-green-03);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  /* margin-top: 1rem; */
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid #dadada;
  gap: 1rem;
  align-items: center;
`;

export const Bar = styled.hr`
  width: 80%;
  margin-top: 4rem;
`;

export const editBtnBox = styled.div`
  display: flex;
  padding: 0.1875rem 0.5625rem 0.1875rem 0.5rem;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: var(--color-green-05);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
