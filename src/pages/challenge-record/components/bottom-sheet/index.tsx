import { motion, PanInfo } from 'framer-motion';

import useBottomSheet from '@/hooks/useBottomSheet';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  data: {
    id: 0;
    createdAt: string;
    content: string;
    imageUrl: string;
  } | null;
  isOpen: boolean;
  onDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void;
};

const BottomSheet = ({ data, isOpen, onDragEnd }: Props) => {
  const { controls } = useBottomSheet(isOpen);

  if (!isOpen || !data) {
    return null;
  }

  return (
    <BottomSheetBox>
      <Wrapper
        drag='y'
        onDragEnd={onDragEnd}
        initial='hidden'
        animate={controls}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: 0 },
          hidden: { y: '100%' },
        }}
        dragConstraints={{ top: 0 }}
        dragElastic={0.2}
      >
        <HeaderWrapper>
          <Text>{data.createdAt.substr(0, 10)}</Text>
          <HandleBar />
        </HeaderWrapper>
        <ContentWrapper>
          <SubText>{data.content}</SubText>
          <Image
            width='100%'
            borderRadius='20px'
            alignSelf='center'
            src={data.imageUrl}
            alt='Detail'
          />
        </ContentWrapper>
      </Wrapper>
    </BottomSheetBox>
  );
};

export default BottomSheet;

const BottomSheetBox = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Wrapper = styled(motion.div)`
  z-index: 101;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  bottom: -50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: var(--color-green-06);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: 70%;
  width: 100%;
  transition: transform 150ms ease-out;
  margin: 0 auto;
  overflow: auto;
`;

const HeaderWrapper = styled(motion.div)`
  z-index: 102;
  height: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  padding: 15px;
  background-color: var(--color-green-01);
  color: var(--color-white);
  display: flex;
  flex-direction: row;
`;

const HandleBar = styled(motion.div)`
  z-index: 103;
  position: absolute;
  left: 50%;
  margin-left: -16px;
  width: 32px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--color-white);
`;

const Text = styled.div`
  font-size: var(--font-size-lg);
  align-self: center;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubText = styled.div`
  font-size: var(--font-size-md);
  text-align: left;
`;
