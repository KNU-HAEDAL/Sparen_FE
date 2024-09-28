import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import { joinChallenge } from '@/apis/challenge-detail/challenge.detail.api';
import { type Challenge } from '@/apis/challenge-detail/challenge.detail.response';
import { Chip } from '@/components/common/chip';
import CTA from '@/components/common/cta';
import { getDynamicPath } from '@/routes/protected-route';
import { Box } from '@chakra-ui/react';

type Props = {
  challenge: Challenge;
  maxDifficulty: number;
};

const ChallengeItem = ({ challenge, maxDifficulty }: Props) => {
  const difficultyRate = (challenge.difficulty / maxDifficulty) * 100;
  const navigate = useNavigate();

  const handleJoinChallenge = () => {
    joinChallenge(challenge.id)
      .then((res) => {
        alert(res.message);
      })
      .catch((error) => {
        // API에서 받은 오류 객체일 경우
        if (error.result === 'FAIL') {
          if (error.errorCode === 'UNAUTHORIZED') {
            alert('로그인 후 시도해주세요.');
            navigate(getDynamicPath.login());
          } else {
            alert(error.message || '다시 시도해주세요.');
          }
        }
        // 예상치 못한 오류 처리
        else {
          alert('다시 시도해주세요.');
        }
      });
  };

  return (
    <S.Wrapper>
      <S.ContentGrid>
        <S.BoldText>난이도</S.BoldText>
        <S.DifficultyBox>
          <S.BarBox>
            <S.Bar width={difficultyRate} />
            <S.MaxBar />
          </S.BarBox>
          <S.Text>
            {challenge.difficulty}
            <S.SubText>&nbsp;/ {maxDifficulty}</S.SubText>
          </S.Text>
        </S.DifficultyBox>

        <S.BoldText>
          참여 횟수 및
          <br /> 기간
        </S.BoldText>
        <S.TimesPeriodContent>
          {challenge.count}회 / {challenge.period}일
        </S.TimesPeriodContent>

        <S.BoldText>참여 경험치</S.BoldText>
        <Chip margin='0 0 0 auto' color='var(--color-green-05)'>
          + {challenge.onceExp} 포인트
        </Chip>

        <S.BoldText>완료 경험치</S.BoldText>
        <Chip margin='0 0 0 auto' color='var(--color-green-05)'>
          + {challenge.successExp} 포인트
        </Chip>
      </S.ContentGrid>

      <Box margin='0 0 16px 0' />
      <CTA label='참여하기' onClick={handleJoinChallenge} />
    </S.Wrapper>
  );
};

export default ChallengeItem;
