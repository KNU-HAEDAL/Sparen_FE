import { useState, useEffect } from 'react';

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
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Records = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState<boolean>(false);
  const [data, setData] = useState<ChallengeRecordData['data'] | null>(null);
  const [items, setItems] = useState<number[]>([]);
  const [record, setRecord] = useState<
    ChallengeRecordDetailData['data'] | null
  >(null);

  const setArray = (length: number, values: number[]) => {
    const array = new Array(length).fill(-1);
    for (let i = 0; i < values.length; i++) {
      array[i] = values[i];
    }
    setItems(array);
  };

  const chunkItems = (arr: number[], chunkSize: number): number[][] => {
    const chunks = [];
    const last = arr.length % chunkSize === 1 ? chunkSize + 1 : 0;
    for (let i = 0; i < arr.length - last; i += chunkSize)
      chunks.push(arr.slice(i, i + chunkSize));

    for (let i = arr.length - last; i < arr.length; i += chunkSize - 1)
      chunks.push(arr.slice(i, i + (chunkSize - 1)));
    return chunks;
  };

  const rows = chunkItems(items, 3);

  const toggleBottomSheet = async (idx: number) => {
    if (idx === -1) {
      setBottomSheetOpen(false);
      console.log('Closing BottomSheet');
    } else {
      try {
        const response = await getChallengeRecordDetail(idx);
        setRecord(response.data);
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

  useEffect(() => {
    const fetchChallengeRecord = async () => {
      try {
        const response = await getChallengeRecord(18);
        setData(response.data);
        setArray(response.data.totalCount, response.data.recordIds);
      } catch (error) {
        console.error('Failed to fetch challenge record:', error);
      }
    };

    fetchChallengeRecord();
  }, []);

  return (
    <>
      {data ? (
        <StampBoardBox>
          <Text
            fontSize='var(--font-size-lg)'
            fontWeight='700'
            marginBottom='15px'
          >
            {data.title}
          </Text>
          <StampBox>
            <Text
              fontSize='var(--font-size-sm)'
              fontWeight='700'
              margin='5px 0'
            >
              챌린지 인증하고 레벨업!
              <br />
              짠돌이가 응원해요
            </Text>
            <Text fontSize='var(--font-size-sm)' marginBottom='15px'>
              챌린지 유효기간 {data.startDate} ~ {data.endDate}
            </Text>
            {rows.map((row, rowIndex) => (
              <Box display='flex' key={rowIndex}>
                {row.map((item, index) => (
                  <Item
                    key={index}
                    rowLength={row.length}
                    onClick={() => {
                      toggleBottomSheet(item);
                    }}
                  >
                    <Stamp data={item} />
                  </Item>
                ))}
              </Box>
            ))}
          </StampBox>
        </StampBoardBox>
      ) : (
        <div />
      )}

      <Caution />

      <BottomSheet
        data={record}
        isOpen={isBottomSheetOpen}
        onDragEnd={handleDragEnd}
      />
    </>
  );
};

export default Records;

const StampBoardBox = styled(Box)`
  margin: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow-y: auto;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StampBox = styled.div`
  border-radius: 20px;
  text-align: center;
  padding: 10px 20px;
  background-color: var(--color-green-06);
  margin-bottom: calc(100% - 250px);
`;

const Item = styled.div<{ rowLength: number }>`
  width: 100%;
  flex: 1;
  text-align: center;

  ${({ rowLength }) =>
    rowLength === 1 &&
    `
        flex: 1 1 100%;
    `}
  ${({ rowLength }) =>
    rowLength === 2 &&
    `
        flex: 1 1 calc(50% - 10px);
    `}
    ${({ rowLength }) =>
    rowLength === 3 &&
    `
        flex: 1 1 calc(33.33% - 20px);
    `}
`;
