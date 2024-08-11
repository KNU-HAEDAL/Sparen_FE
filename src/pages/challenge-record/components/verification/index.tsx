import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postVerification } from '@/apis/challenge-record/challenge.record.api';
import { RouterPath } from '@/routes/path';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Verification = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [previewImg, setPreviewImg] = useState<File | null>(null);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const saveHandler = async () => {
    try {
      if (previewImg) {
        const response = await postVerification(18, previewImg, text);
        if (response.status === 200) {
          console.log('응답: ', response);
          alert('성공적으로 저장했습니다.');
          navigate(RouterPath.root);
        }
      } else {
        alert('이미지를 선택하세요.');
      }
    } catch (error) {
      alert('저장에 실패했습니다.');
    }
  };

  const handleButtonClick = () => {
    fileInput.current?.click();
  };

  const imageHandler = (fileBlob: File) => {
    setPreviewImg(fileBlob); // File 객체를 직접 설정합니다.

    // 미리보기를 위해 FileReader를 사용합니다.
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        // 여기서 미리보기 이미지 URL을 설정합니다.
        const imgElement = document.querySelector(
          '#previewImage'
        ) as HTMLImageElement;
        if (imgElement) {
          imgElement.src = reader.result;
        }
      }
    };
  };

  return (
    <VerificationBox>
      <Text fontSize='var(--font-size-lg)' fontWeight='700' marginBottom='15px'>
        길에 떨어진 쓰레기 줍기 챌린지
      </Text>
      <InputArea
        placeholder='어떻게 챌린지를 수행했는지 글로 남겨보세요'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {!previewImg && (
        <AddImageBtn onClick={handleButtonClick}>
          <input
            type='file'
            ref={fileInput}
            accept='image/*'
            style={{ display: 'none' }}
            onChange={(e) => {
              if (e.target.files) {
                imageHandler(e.target.files[0]);
              }
            }}
          />
          사진추가
        </AddImageBtn>
      )}
      {previewImg && <PreviewImage id='previewImage' src='' />}{' '}
      {/* 미리보기 이미지 */}
      <SummitButton onClick={saveHandler}>참여하기</SummitButton>
    </VerificationBox>
  );
};

export default Verification;

// Styled components
const VerificationBox = styled.div`
  display: flex;
  margin: 2.5rem 0;
  flex-direction: column;
  text-align: left;

  overflow-y: auto;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InputArea = styled.textarea`
  font-size: var(--font-size-sm);
  border-radius: 20px;
  border: var(--color-green-01) 1px solid;
  padding: 10px;
  height: 30vh;
  resize: none;
  :focus {
    outline: none;
  }
`;

const AddImageBtn = styled.div`
  border-radius: 20px;
  background-color: #fff;
  font-size: var(--font-size-md);
  color: var(--color-green-01);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  border: var(--color-green-01) 1px solid;
  margin-top: 30px;
`;

const SummitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 50px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: var(--color-green-01);
  color: #fff;
  font-size: var(--font-size-md);
  font-weight: bold;
  border: none;
`;

const PreviewImage = styled(Image)`
  margin-top: 30px;
  margin-bottom: 60px;
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
  border: none;
`;

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalBackDrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 20%;
  background-color: var(--color-white);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
