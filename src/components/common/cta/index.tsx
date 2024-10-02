import styled from '@emotion/styled';

type CTAProps = {
  label: string;
  display: 'flex' | 'block';
  disabled?: boolean;
  onClick: () => void;
};

const CTA = ({ label, display = 'flex', disabled, onClick }: CTAProps) => {
  return (
    <StyledCTA display={display} disabled={disabled} onClick={onClick}>
      {label}
    </StyledCTA>
  );
};

export default CTA;

export const CTA_CONTAINER_HEIGHT = '4rem';

const StyledCTA = styled.button<{
  display: 'flex' | 'block';
  disabled?: boolean;
}>`
  border: none;
  border-radius: 10px;
  background-color: var(--color-green-01);
  color: var(--color-white);
  outline: none;

  ${({ display }) =>
    display === 'flex' &&
    `
    width: calc(100% - 16px); // 부모 요소의 좌우 padding 빼고
    margin: 0 auto;
    padding: 10px 8px;
    font-size: var(--font-size-md);
    font-weight: bold;
  `}

  ${({ display }) =>
    display === 'block' &&
    `
    margin: 0 0 0 auto;
    padding: 6px 8px;
    font-size: var(--font-size-sm);
    font-weight: 600;
  `}

  &:disabled {
    cursor: not-allowed;
    color: var(--color-grey-01);
    background-color: var(--color-grey-02);
  }

  /* &:hover와 &:focus는 disabled === false일 때만 적용 */
  &:hover,
  &:focus {
    ${({ disabled }) =>
      !disabled &&
      `
      opacity: 0.8 !important;
      background-color: var(--color-green-01) !important;
      color: var(--color-white) !important;
    `}
  }
`;

// 컨테이너 필요할 때 따로 임포트하여 사용
export const CTAContainer = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  width: 100%;
  height: ${CTA_CONTAINER_HEIGHT};
  padding: 8px 16px;
  background-color: var(--color-white);
  z-index: 1;
`;
