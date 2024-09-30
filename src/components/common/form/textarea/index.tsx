import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type TextareaProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  minValueLength?: number;
  valid?: boolean;
};

const Textarea = ({
  placeholder,
  value,
  onChange,
  minValueLength,
  valid,
}: TextareaProps) => {
  return (
    <>
      <StyledTextarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        valid={valid}
      />
      {/* 최소 길이 제한 있을 때만 보이기 */}
      {minValueLength && (
        <Text
          fontSize='var(--font-size-xs)'
          color={valid ? `var(--color-grey-01)` : `var(--color-class-05)`}
          textAlign='right'
          margin='8px 16px 0'
        >
          {value.length} / 최소 {minValueLength}자
        </Text>
      )}
    </>
  );
};

export default Textarea;

const StyledTextarea = styled.textarea<{ valid?: boolean }>`
  font-size: var(--font-size-sm);
  color: var(--color-black);
  border-radius: 20px;
  border: ${({ valid }) =>
    valid
      ? 'var(--color-grey-02) 1px solid'
      : 'var(--color-class-05) 1px solid'};
  padding: 12px;
  height: 180px;
  resize: none;
  outline: none;
  margin: 0 16px;

  &::placeholder {
    color: var(--color-grey-01);
    opacity: 1; /* Firefox에서 placeholder 색상을 명시적으로 설정하기 위해 추가 */
  }

  &:focus {
    border: ${({ valid }) =>
      valid
        ? 'var(--color-green-01) 1px solid'
        : 'var(--color-class-05) 1px solid'};
  }
`;
