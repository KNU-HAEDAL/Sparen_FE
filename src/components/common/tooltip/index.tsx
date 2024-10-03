import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import styled from '@emotion/styled';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  direction?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip = ({ content, children, direction = 'top' }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // 툴팁 자동 닫기
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <TooltipWrapper>
      {children}
      {isVisible && (
        <TooltipBox direction={direction}>
          {content}
          <CloseButton onClick={handleClose}>
            <IoCloseOutline size='16px' />
          </CloseButton>
        </TooltipBox>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;

// 스타일 정의

const TOOLTIP_COLOR = `var(--color-green-03)`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipBox = styled.div<{ direction: string }>`
  position: absolute;
  padding: 3px 6px;
  border-radius: 4px;
  background-color: ${TOOLTIP_COLOR};
  color: var(--color-white);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 5;
  display: flex;
  align-items: center;

  ${({ direction }) =>
    direction === 'top' &&
    `
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
  `}

  ${({ direction }) =>
    direction === 'right' &&
    `
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    margin-left: 8px;
  `}

  ${({ direction }) =>
    direction === 'bottom' &&
    `
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
  `}

  ${({ direction }) =>
    direction === 'left' &&
    `
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    margin-right: 8px;
  `}
  
  // 꼬리 부분
  ::after {
    content: '';
    position: absolute;
    border-style: solid;

    ${({ direction }) =>
      direction === 'top' &&
      `
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px 6px 0 6px;
      border-color: ${TOOLTIP_COLOR} transparent transparent transparent;
    `}

    ${({ direction }) =>
      direction === 'right' &&
      `
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-width: 8px 6px 6px 0;
      border-color: transparent ${TOOLTIP_COLOR} transparent transparent;
    `}

    ${({ direction }) =>
      direction === 'bottom' &&
      `
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 0 6px 8px 6px;
      border-color: transparent transparent ${TOOLTIP_COLOR} transparent;
    `}

    ${({ direction }) =>
      direction === 'left' &&
      `
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      border-width: 6px 0 8px 6px;
      border-color: transparent transparent transparent ${TOOLTIP_COLOR};
    `}
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  margin-left: 6px;
`;
