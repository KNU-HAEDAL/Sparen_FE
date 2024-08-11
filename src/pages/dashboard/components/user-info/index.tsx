import { useState } from 'react';

import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import UpdateNicknameModal from '@/components/features/modal';
import { getTierDetails } from '@/constants/data/tierSchema';
import { useInfoStore } from '@/store/useInfoStore';
import { CurrentTierGraph, TotalTierGraph } from '@/styles/baseStyles';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const UserInfo = () => {
  const { userInfo } = useInfoStore();
  const tierDetails = userInfo?.tierInfo.tier
    ? getTierDetails(userInfo?.tierInfo.tier)
    : { color: 'var(--color-class-02)' };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DashBoardBox>
        <LeaveBox>
          <LeaveBtn>
            <Text fontSize='1rem' color='#fff'>
              회원탈퇴
            </Text>
          </LeaveBtn>
        </LeaveBox>
        <Box margin='1rem' display='flex'>
          <Image width='5.625rem' height='5.625rem' src={ProfileImg} />
          <ProfileInfoBox>
            <Text
              color='#000'
              fontSize='1.5rem'
              fontStyle='normal'
              fontWeight='700'
              lineHeight='normal'
            >
              {userInfo?.nickname}
            </Text>
            <EditBtnBox onClick={handleOpenModal}>
              <Text color='#fff' fontSize='1rem' lineHeight='normal'>
                수정하기
              </Text>
            </EditBtnBox>
          </ProfileInfoBox>
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          width='5rem'
          marginX='0.5rem'
          marginY='1rem'
        >
          <Text color={tierDetails?.color} fontWeight='700'>
            {userInfo?.tierInfo.tier}
          </Text>
          <Text color={tierDetails?.color} fontWeight='1rem'>
            {userInfo?.tierInfo.currentExp}
          </Text>
        </Box>
        <TotalTierGraph
          width='100%'
          mgColumn='1rem'
          mgRow='0'
          height='0.3125rem'
          radius='0.125rem'
        >
          <CurrentTierGraph
            width='1rem'
            height='0.3125rem'
            radius='0.125rem'
            bgColor={tierDetails?.color}
          />
        </TotalTierGraph>
      </DashBoardBox>
      <UpdateNicknameModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        currentNickname={userInfo?.nickname}
      />
    </>
  );
};

export default UserInfo;

const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

const DashBoardBox = styled.div`
  height: 14.625rem;

  border-radius: 0rem 0rem 0.625rem 0.625rem;
  background: var(--green--06, #f0f4f3);
`;

const LeaveBox = styled(Container)`
  justify-content: flex-end;

  padding-right: 1rem;
`;

const LeaveBtn = styled.div`
  display: inline-flex;
  padding: 0.1875rem 0.5625rem 0.1875rem 0.5rem;
  justify-content: center;
  cursor: pointer;

  border-radius: 0.5rem;
  background-color: var(--color-green-03);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ProfileInfoBox = styled(Container)`
  flex-direction: row;
  margin-left: 1rem;
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid #dadada;
  gap: 1rem;
`;

const EditBtnBox = styled(Container)`
  padding: 0.1875rem 0.5625rem 0.1875rem 0.5rem;
  justify-content: center;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: var(--color-green-05);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
