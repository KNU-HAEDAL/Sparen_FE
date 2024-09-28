import { useRef, useState, useEffect } from 'react';

import { postVerification } from '@/apis/challenge-record/challenge.record.api';
import CTA, { CTAContainer } from '@/components/common/cta';
import Textarea from '@/components/common/form/textarea';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MIN_CONTENT_LENGTH = 20;

const Verification = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [content, setContent] = useState('');
  const [isContentValid, setIsContentValid] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);

  // 폼 유효성 검사 -> 버튼 상태 관리
  useEffect(() => {
    if (image && content.trim() && content.length >= MIN_CONTENT_LENGTH) {
      setIsUploadDisabled(false);
    } else {
      setIsUploadDisabled(true);
    }
  }, [image, content]);

  const handleUploadImage = () => {
    fileInput.current?.click();
  };

  const handleImage = (fileBlob: File) => {
    setImage(fileBlob); // File 객체를 직접 설정합니다.

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

  // 내용 유효성 검사
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    // console.log(content); // test

    if (newContent.trim() && newContent.length >= MIN_CONTENT_LENGTH) {
      setIsContentValid(true);
    } else {
      setIsContentValid(false);
    }
    // console.log(isContentValid); // test
  };

  const handleSave = async () => {
    if (image) {
      postVerification(18, image, content)
        .then(() => {
          // console.log('응답: ', response);
          alert('챌린지 인증이 등록되었습니다!');
          handleSelectedTab(0); // 인증 기록 탭으로 이동
        })
        .catch((error) => {
          // API에서 받은 오류 객체일 경우
          if (error?.result === 'FAIL') {
            alert(error.message || '다시 시도해주세요.');
          } else {
            // 예상치 못한 오류 처리
            alert('다시 시도해주세요.');
          }
        });
    }
  };

  const handleSelectedTab = (value: number) => {
    // setActiveTab(value as 0 | 1);
    sessionStorage.setItem('activeTab', String(value));
  };

  return (
    <>
      <Wrapper>
        <Textarea
          placeholder='어떻게 챌린지를 수행했는지 기록을 남겨보세요.'
          value={content}
          onChange={handleContentChange}
          valid={isContentValid}
        />
        {!image && (
          <AddImageBtn onClick={handleUploadImage}>
            <input
              type='file'
              ref={fileInput}
              accept='image/*'
              style={{ display: 'none' }}
              onChange={(e) => {
                if (e.target.files) {
                  handleImage(e.target.files[0]);
                }
              }}
            />
            사진 추가
          </AddImageBtn>
        )}
        {image && <PreviewImage id='previewImage' src='' />}
      </Wrapper>
      <CTAContainer>
        <CTA
          label='등록하기'
          disabled={isUploadDisabled}
          onClick={handleSave}
        />
      </CTAContainer>
    </>
  );
};

export default Verification;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0 16px;
  text-align: left;
  overflow-y: auto;
  scrollbar-color: transparent transparent;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const InputArea = styled.textarea`
//   font-size: var(--font-size-sm);
//   border-radius: 20px;
//   border: var(--color-green-01) 1px solid;
//   padding: 10px;
//   height: 30vh;
//   resize: none;
//   :focus {
//     outline: none;
//   }
// `;

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

const PreviewImage = styled(Image)`
  margin-top: 30px;
  margin-bottom: 60px;
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
  border: none;
`;

// export const ModalBack = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.8);
// `;

// export const ModalBackDrop = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 60%;
//   height: 20%;
//   background-color: var(--color-white);
//   border-radius: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 100;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// `;
