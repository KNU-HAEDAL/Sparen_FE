import { useState } from 'react';

import * as S from './styles';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import UpdateNicknameModal from '@/components/modal/UpdateNicknameModal';
import { getTierDetails } from '@/constants/data/tierSchema';
import { useInfoStore } from '@/store/useInfoStore';
import * as Base from '@/styles/baseStyles';

const UserInfo = () => {
  const { userNickname, userTier, userCurrentExp } = useInfoStore();
  const tierDetails = userTier
    ? getTierDetails(userTier)
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
      <S.DashBoardBox>
        <S.LeaveBox>
          <S.LeaveBtn>회원탈퇴</S.LeaveBtn>
        </S.LeaveBox>
        <Base.Container mgColumn='1rem' mgRow='1rem'>
          <Base.Img width='5.625rem' height='5.625rem' src={ProfileImg} />
          <S.ProfileInfoBox>
            <Base.Text
              color='#000'
              font-size='1.5rem'
              font-style='normal'
              font-weight='700'
              line-height='normal'
            >
              {userNickname}
            </Base.Text>
            <S.editBtnBox>
              <S.EditBtn onClick={handleOpenModal}>수정하기</S.EditBtn>
            </S.editBtnBox>
          </S.ProfileInfoBox>
        </Base.Container>
        <Base.Container
          justifyContent='space-between'
          width='5rem'
          mgColumn='0.5rem'
          mgRow='1rem'
        >
          <Base.Text color={tierDetails?.color} fontWeight='700'>
            {userTier}
          </Base.Text>
          <Base.Text color={tierDetails?.color} fontWeight='1rem'>
            {userCurrentExp}
          </Base.Text>
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
        currentNickname={userNickname}
      />
    </>
  );
};

export default UserInfo;
