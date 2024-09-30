import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BottomSheet from '../components/bottom-sheet';
import Caution from '../components/caution';
import Stamp from '../components/stamp';
import {
  getChallengeRecord,
  getChallengeRecordDetail,
} from '@/apis/challenge-record/challenge.record.api';
import {
  ChallengeRecordData,
  ChallengeRecordDetailData,
} from '@/apis/challenge-record/challenge.record.response';
import { formatDate } from '@/utils/formatters';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Records = () => {
  const { id } = useParams();
  const challengeId = Number(id);

  const [data, setData] = useState<ChallengeRecordData | null>(null); // api 응답 데이터 전체
  const [recordIdList, setRecordIdList] = useState<number[]>([]);
  const [recordDetails, setRecordDetails] = useState<
    ChallengeRecordDetailData['data'] | null
  >(null);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState<boolean>(false);

  // recordId를 recordList에 추가하는 함수
  const fillRecordList = (length: number, values: number[]) => {
    const newRecordIdList = new Array(length).fill(-1); // 모두 -1로 초기화
    for (let i = 0; i < values.length; i++) {
      newRecordIdList[i] = values[i]; // recordId로 바꾸기
    }
    setRecordIdList(newRecordIdList);
  };

  // 기록 리스트 페칭
  useEffect(() => {
    getChallengeRecord(challengeId)
      .then((res) => {
        setData(res);
        fillRecordList(res.totalCount, res.recordIds);
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  }, [challengeId]);

  const toggleBottomSheet = async (idx: number) => {
    if (idx === -1) {
      setBottomSheetOpen(false);
      console.log('Closing BottomSheet');
    } else {
      try {
        const response = await getChallengeRecordDetail(idx);
        setRecordDetails(response.data);
        setBottomSheetOpen(true);
      } catch (error) {
        console.error('Failed to fetch challenge record detail:', error);
      }
    }
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    if (info.offset.y > 100) {
      setBottomSheetOpen(false);
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
        {data && (
          <>
            <InfoGrid>
              {/* 참여 기간 */}
              <Text>참여 기간</Text>
              <span className='highlight'>
                {formatDate(data.startDate)} ~ {formatDate(data.endDate)}
              </span>

              {/* 인증 횟수 */}
              <Text>인증 횟수</Text>
              <Text marginLeft='auto'>
                <span className='highlight'>{data.successCount}</span>
                &nbsp;/ {data.totalCount}회
              </Text>
            </InfoGrid>

            <StampGrid>
              {recordIdList.map((recordId, index) => (
                <Stamp
                  key={index}
                  id={recordId}
                  onClick={() => {
                    toggleBottomSheet(recordId);
                  }}
                />
              ))}
            </StampGrid>
          </>
        )}
      </StampBoard>

      <Caution />

      <BottomSheet
        data={recordDetails}
        isOpen={isBottomSheetOpen}
        onDragEnd={handleDragEnd}
      />
    </Wrapper>
  );
};

export default Records;

const Wrapper = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
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
