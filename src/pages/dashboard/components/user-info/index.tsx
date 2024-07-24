import { useState } from 'react';

import * as S from './styles';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import UpdateNicknameModal from '@/components/features/modal';
import { getTierDetails } from '@/constants/data/tierSchema';
import { useInfoStore } from '@/store/useInfoStore';
import * as Base from '@/styles/baseStyles';
import { Box, Image, Text } from '@chakra-ui/react';

const UserInfo = () => {
  // const { userNickname, userTier, userCurrentExp } = useInfoStore();
  const { userInfo } = useInfoStore();
  const tierDetails = userInfo?.tierInfo.tier
    ? getTierDetails(userInfo?.tierInfo.tier)
    : { color: 'var(--color-class-02)' };

  console.log(userInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.DashBoardBox>
        <S.LeaveBox>
          <S.LeaveBtn>
            <Text fontSize='1rem' color='#fff'>
              회원탈퇴
            </Text>
          </S.LeaveBtn>
        </S.LeaveBox>
        <Box margin='1rem' display='flex'>
          <Image width='5.625rem' height='5.625rem' src={ProfileImg} />
          <S.ProfileInfoBox>
            <Text
              color='#000'
              fontSize='1.5rem'
              fontStyle='normal'
              fontWeight='700'
              lineHeight='normal'
            >
              {userInfo?.nickname}
            </Text>
            <S.editBtnBox onClick={handleOpenModal}>
              <Text color='#fff' fontSize='1rem' lineHeight='normal'>
                수정하기
              </Text>
            </S.editBtnBox>
          </S.ProfileInfoBox>
        </Box>
        <Base.Container
          justifyContent='space-between'
          width='5rem'
          mgColumn='0.5rem'
          mgRow='1rem'
        >
          <Text color={tierDetails?.color} fontWeight='700'>
            {userInfo?.tierInfo.tier}
          </Text>
          <Text color={tierDetails?.color} fontWeight='1rem'>
            {userInfo?.tierInfo.currentExp}
          </Text>
        </Base.Container>
        <Base.TotalTierGraph
          width='100%'
          mgColumn='1rem'
          mgRow='0'
          height='0.3125rem'
          radius='0.125rem'
        >
          <Base.CurrentTierGraph
            width='1rem'
            height='0.3125rem'
            radius='0.125rem'
            bgColor={tierDetails?.color}
          />
        </Base.TotalTierGraph>
      </S.DashBoardBox>
      <UpdateNicknameModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        currentNickname={userInfo?.nickname}
      />
    </>
  );
};

export default UserInfo;
