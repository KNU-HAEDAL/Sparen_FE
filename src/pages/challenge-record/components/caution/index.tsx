import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Caution = () => {
  return (
    <Wrapper>
      <Text fontSize='var(--font-size-sm)' fontWeight='600' margin='0 0 8px 0'>
        유의 사항
      </Text>
      <Text
        as='ul'
        listStyleType='disc'
        listStylePosition='inside'
        fontSize='var(--font-size-xs)'
        css={`
          li {
            padding-left: 1.4em; /* 들여쓰기 추가 */
            text-indent: -1.4em; /* 첫 줄은 들여쓰지 않음 */
          }
        `}
      >
        <li>1일 인증 횟수에는 제한이 없습니다.</li>
        <li>모든 스탬프를 모으면 챌린지를 완료하게 됩니다.</li>
        <li>
          완료한 챌린지는 &apos;완료한 챌린지 목록&apos;에서 조회할 수 있습니다.
        </li>
        <li>
          사진 조작, 타인의 계정 이용 등의 부정 행위 적발 시 해당 계정은 강제
          탈퇴되며 추후 서비스 이용에 제한이 있을 수 있습니다.
        </li>
        <li>스탬프가 정상 인증되지 않는 경우 운영 측으로 문의해주세요.</li>
      </Text>
    </Wrapper>
  );
};

export default Caution;

const Wrapper = styled.div`
  padding: 24px 16px;
  background-color: var(--color-class-01);
  color: var(--color-black);
  text-align: left;
  margin-top: auto;
`;
