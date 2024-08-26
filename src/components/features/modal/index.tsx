import { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { Button, Input, Space } from 'antd';

import { fixUserInfo } from '@/apis/user/user.api';
import { useInfoStore } from '@/store/useInfoStore';
import styled from '@emotion/styled';

type BiddingModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  currentNickname: string;
};

Modal.setAppElement('#root');

const NicknameModal: React.FC<BiddingModalProps> = ({
  isOpen,
  onRequestClose,
  currentNickname,
}) => {
  const { userInfo, setUserInfo } = useInfoStore();
  const [nickname, setNickname] = useState<string>(currentNickname);

  useEffect(() => {
    setNickname(currentNickname);
  }, [currentNickname]);

  const fetchFixNickname = useCallback(async () => {
    try {
      return await fixUserInfo(nickname);
    } catch (error) {
      console.error('Error fixing user info:', error);
      throw error;
    }
  }, [nickname]);

  const handleSubmit = async () => {
    try {
      if (nickname.trim() !== '') {
        await fetchFixNickname();
        if (userInfo) {
          setUserInfo({
            ...userInfo,
            nickname,
            totalPage: 0,
            hasNext: false,
            data: [],
          });
        }
        alert('닉네임이 성공적으로 수정되었습니다.');
        onRequestClose();
      } else {
        alert('유효한 닉네임을 입력해주세요.');
      }
    } catch (error) {
      console.error('Error updating nickname:', error);
      alert('닉네임 수정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Update Nickname Modal'
      style={{
        content: {
          width: '15rem',
          height: '12rem',
          margin: 'auto',
          borderRadius: '1rem',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <ModalContainer>
        <h2>닉네임 수정</h2>
        <Input
          type='text'
          placeholder='새 닉네임을 입력하세요'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <ButtonContainer>
          <Space direction='horizontal' size='small'>
            <CustomButton type='primary' onClick={handleSubmit}>
              수정
            </CustomButton>
            <CustomButton type='primary' onClick={onRequestClose}>
              취소
            </CustomButton>
          </Space>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default NicknameModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

const CustomButton = styled(Button)`
  background-color: var(--color-green-01);
`;
