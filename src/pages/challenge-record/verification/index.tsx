import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';

// import { useParams } from 'react-router-dom';
import Caution from '../components/caution';
import { postVerification } from '@/apis/challenge-record/challenge.record.api';
import CTA, { CTAContainer } from '@/components/common/cta';
import Textarea from '@/components/common/form/textarea';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MIN_CONTENT_LENGTH = 20;

type VerificationProps = {
  challengeId: number;
  setActiveTab: (value: number) => void;
};

const Verification = ({ challengeId, setActiveTab }: VerificationProps) => {
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

  const handleDeleteImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setImage(null);
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
      postVerification(challengeId, content, image)
        .then(() => {
          alert('챌린지 인증이 등록되었습니다!');

          // 폼 내용 초기화
          setContent('');
          setImage(null);
          // 인증 기록 탭으로 변경 및 새로고침하여 데이터 새로 페칭
          setActiveTab(0);
          window.location.reload();
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

  return (
    <>
      <Wrapper>
        <Textarea
          placeholder='어떻게 챌린지를 수행했는지 기록을 남겨보세요.'
          value={content}
          onChange={handleContentChange}
          minValueLength={MIN_CONTENT_LENGTH}
          valid={isContentValid}
        />
        {image && (
          <PreviewImageContainer>
            <PreviewImage id='previewImage' src='' />
            <DeleteImageButton onClick={handleDeleteImage}>
              <IoClose size='24' />
            </DeleteImageButton>
          </PreviewImageContainer>
        )}
        <AddImage onClick={handleUploadImage}>
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
          사진 업로드
        </AddImage>
        <Caution />
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

const PreviewImageContainer = styled.div`
  position: relative;
  margin: 16px 16px 0 16px;
`;

const PreviewImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: var(--color-grey-02) 1px solid;
`;

const DeleteImageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  outline: none;
  color: var(--color-grey-02);
`;

const AddImage = styled.div`
  box-sizing: border-box;
  border: var(--color-green-01) 1px solid;
  border-radius: 10px;
  background-color: var(--color-white);
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--color-green-01);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 8px;
  outline: none;
  cursor: pointer;
  margin: 16px 16px 32px;
`;
