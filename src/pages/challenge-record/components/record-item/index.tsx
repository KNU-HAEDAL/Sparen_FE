import { motion, PanInfo } from 'framer-motion';

import { ChallengeRecordDetailData } from '@/apis/challenge-record/challenge.record.response';
import { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import useBottomSheet from '@/hooks/useBottomSheet';
import { formatDate } from '@/utils/formatters';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type RecordItemProps = {
  data: ChallengeRecordDetailData;
  recordIndex: number;
  isOpen: boolean;
  onDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void;
};

const RecordItem = ({
  data,
  recordIndex,
  isOpen,
  onDragEnd,
}: RecordItemProps) => {
  const { controls } = useBottomSheet(isOpen);

  if (!isOpen || !data) {
    return null;
  }

  return (
    <Wrapper>
      <Inner
        drag='y'
        onDragEnd={onDragEnd}
        initial='hidden'
        animate={controls}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 700,
        }}
        variants={{
          visible: { y: 0 },
          hidden: { y: '100%' },
        }}
        dragConstraints={{ top: 0 }}
        dragElastic={0.1}
      >
        <Handle>
          <HandleBar />
        </Handle>
        <Content>
          <Text
            fontSize='var(--font-size-lg)'
            fontWeight='600'
            margin='0 0 16px 0'
            alignSelf='center'
          >
            {recordIndex}회차 인증
          </Text>
          <Text
            fontSize='var(--font-size-xs)'
            color='var(--color-grey-01)'
            position='absolute'
            top='12px'
            right='16px'
          >
            {formatDate(data.createdAt)}
          </Text>
          <Text fontSize='var(--font-size-md)'>{data.content}</Text>
          <Image
            src={data.imageUrl}
            width='100%'
            borderRadius='20px'
            border='1px solid var(--color-grey-02)'
            alignSelf='center'
            margin='8px 0 0 0'
          />
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default RecordItem;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end; // 자식이 하단에 붙게
  z-index: 100;
  overflow: hidden;
`;

const Inner = styled(motion.div)`
  z-index: 101;
  width: 100%;
  min-height: 60%;
  max-height: calc(100vh - ${HEADER_HEIGHT});
  overflow-y: auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  background-color: var(--color-green-06);
  transition: transform 150ms ease-out;
  margin: 0 auto;
`;

const Handle = styled(motion.div)`
  z-index: 102;
  height: 36px;
  position: relative;
  padding: 16px;
  background-color: var(--color-green-01);
  color: var(--color-white);
`;

const HandleBar = styled(motion.div)`
  z-index: 103;
  position: absolute;
  top: 10px;
  transform: translateX(-50%);
  left: 50%;
  width: 40px;
  height: 4px;
  border-radius: 10px;
  background-color: var(--color-green-06);
`;

const Content = styled.div`
  padding: 12px 16px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
`;
