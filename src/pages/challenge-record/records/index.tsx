import { useState, useEffect } from 'react';

// import { useParams } from 'react-router-dom';
import Caution from '../components/caution';
import RecordItem from '../components/record-item';
import Stamp from '../components/stamp';
import { getChallengeRecordDetails } from '@/apis/challenge-record/challenge.record.api';
import {
  ChallengeRecordData,
  ChallengeRecordDetailData,
} from '@/apis/challenge-record/challenge.record.response';
import Tooltip from '@/components/common/tooltip';
import { formatDate } from '@/utils/formatters';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type RecordsProps = {
  records: ChallengeRecordData;
  recordIdList: number[];
};

const Records = ({ records, recordIdList }: RecordsProps) => {
  // const [data, setData] = useState<ChallengeRecordData | null>(); // api 응답 데이터 전체
  // const [recordIdList, setRecordIdList] = useState<number[]>([]);
  const [recordDetails, setRecordDetails] =
    useState<ChallengeRecordDetailData | null>(); // 인증기록 상세
  const [isRecordItemOpen, setIsRecordItemOpen] = useState<boolean>(false);

  // 각각의 인증기록을 펼치는 핸들러
  const handleStampClick = (recordId: number) => {
    if (recordId === -1) {
      // Stamp 안에서 분기 처리 되어 있긴 한데.
      setIsRecordItemOpen(false);
      console.log('Closed the record item');
    } else {
      getChallengeRecordDetails(recordId)
        .then((res) => {
          setRecordDetails(res);
          setIsRecordItemOpen(true);
        })
        .catch((error) => {
          console.error('Error fetching record details:', error);
        });
    }
  };

  // 바텀시트 열렸을 때 overflow-y 숨기기
  useEffect(() => {
    if (isRecordItemOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }

    // 컴포넌트 언마운트 시 기본 값으로 되돌리기
    return () => {
      document.body.style.overflowY = '';
    };
  }, [isRecordItemOpen]);

  // 인증기록 (RecordItem) 닫는 핸들러
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    if (info.offset.y > 100) {
      setIsRecordItemOpen(false);
    }
  };

  return (
    <Wrapper>
      <StampBoard>
        <Text
          fontSize='var(--font-size-md)'
          fontWeight='600'
          margin='0 0 8px 0'
        >
          챌린지 인증하고 레벨 업!
          <br />
          짠돌이가 응원해요
        </Text>

        <>
          <InfoGrid>
            {/* 참여 기간 */}
            <Text>참여 기간</Text>
            <span className='highlight'>
              {formatDate(records.startDate)} ~ {formatDate(records.endDate)}
            </span>

            {/* 인증 횟수 */}
            <Text>인증 횟수</Text>
            <Text marginLeft='auto'>
              <span className='highlight'>{records.successCount}</span>
              &nbsp;/ {records.totalCount}회
            </Text>
          </InfoGrid>

          <StampGrid>
            {recordIdList.map((recordId, index) =>
              // 첫 번째 스탬프가 채워져있을 때 툴팁 표시
              index === 0 && recordId !== -1 ? (
                <Tooltip key={index} content='스탬프를 클릭해보세요'>
                  <Stamp
                    id={recordId}
                    onClick={() => handleStampClick(recordId)}
                  />
                </Tooltip>
              ) : (
                <Stamp
                  key={index}
                  id={recordId}
                  onClick={() => handleStampClick(recordId)}
                />
              )
            )}
          </StampGrid>
        </>
      </StampBoard>

      {recordDetails && (
        <RecordItem
          data={recordDetails}
          recordIndex={recordIdList.indexOf(recordDetails.id) + 1}
          isOpen={isRecordItemOpen}
          onDragEnd={handleDragEnd}
        />
      )}

      <Caution />
    </Wrapper>
  );
};

export default Records;

const Wrapper = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StampBoard = styled.div`
  margin: 0 16px 32px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  border: 1px solid var(--color-grey-02);
  background-color: var(--color-white);
`;

const InfoGrid = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 0 16px;
  margin: 0 0 24px 0;
  line-height: 2;
  font-size: var(--font-size-sm);

  .highlight {
    font-weight: 600;
    color: var(--color-green-01);
  }
`;

const StampGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 0;
  justify-items: center;
  align-items: center;
`;
