import styled from '@emotion/styled';

type CTAProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const CTA = ({ label, disabled, onClick }: CTAProps) => {
  return (
    <StyledCTA disabled={disabled} onClick={onClick}>
      {label}
    </StyledCTA>
  );
};

export default CTA;

export const CTA_CONTAINER_HEIGHT = '4rem';

const StyledCTA = styled.button<{ disabled?: boolean }>`
  width: calc(100% - 16px); // 부모 요소의 좌우 padding 빼고
  border: none;
  border-radius: 10px;
  background-color: var(--color-green-01);
  color: var(--color-white);
  font-size: var(--font-size-md);
  font-weight: bold;
  outline: none;
  padding: 10px 8px;
  margin: 0 auto;

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
