import { forwardRef } from 'react';

import styled from '@emotion/styled';

interface EmptyStateProps {
  children: React.ReactNode; // children의 타입 정의
}

// ref를 전달하기 위해 forwardRef 사용
const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ children }, ref) => {
    return <Wrapper ref={ref}>{children}</Wrapper>;
  }
);

EmptyState.displayName = 'EmptyState';

export default EmptyState;

// 스타일 정의
const Wrapper = styled.div`
  font-size: var(--font-size-md);

  .highlight {
    font-weight: 600;
    color: var(--color-green-03);
  }
`;
