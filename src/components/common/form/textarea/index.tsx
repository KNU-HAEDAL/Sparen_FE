import styled from '@emotion/styled';

type TextareaProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  valid?: boolean;
};

const Textarea = ({ placeholder, value, onChange, valid }: TextareaProps) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      valid={valid}
    />
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
  width: 100%;
  height: 180px;
  resize: none;
  outline: none;

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
