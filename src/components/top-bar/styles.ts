// import { TopBarLayout } from './styles';
import styled from '@emotion/styled';

// export const TopBarLayout = styled.div<{ BackgroundColor?: string }>`
//   display: flex;
//   height: 3rem;
//   padding: 0.46875rem 0.625rem;
//   justify-content: space-between;
//   text-align: center;
//   align-items: center;
//   background-color: ${(props) =>
//     props.BackgroundColor || 'var(--color-green-06)'};
// `;

export const TopBarLayout = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
  cursor: pointer;
  gap: 1rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const prevbtnContainer = styled.div`
  display: flex;
  width: 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 0.625rem;
`;

export const TopBarTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyContainer = styled.div`
  display: flex;
  width: 2.8125rem;
  height: 1.6875rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const LogoContainer = styled.div`
  border: 1.5px solid var(--color-green-01);
  padding: 0.25rem;
  border-radius: 50%;
`;

export const LoginBtn = styled.div`
  display: flex;
  border: 1.5px solid var(--color-green-01);
`;
