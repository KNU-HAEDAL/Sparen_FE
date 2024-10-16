import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';

// import { useParams } from 'react-router-dom';
import Caution from '../components/caution';
import { postVerification } from '@/apis/challenge-record/challenge.record.api';
import CTA, { CTAContainer } from '@/components/common/cta';
import EmptyState from '@/components/common/empty-state';
import Textarea from '@/components/common/form/textarea';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MIN_CONTENT_LENGTH = 20;

type VerificationProps = {
  challengeId: number;
  setActiveTab: (value: number) => void;
  successCount: number;
  totalCount: number;
  endDate: string;
};

const Verification = ({
  challengeId,
  setActiveTab,
  successCount,
  totalCount,
  endDate,
}: VerificationProps) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [fileSizeInMB, setFileSizeInMB] = useState<number>(0);
  const [content, setContent] = useState('');
  const [isContentValid, setIsContentValid] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);
  const isComplete: boolean = successCount >= totalCount;
  const endDateInDate = new Date(endDate);
  const todayDate = new Date();

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

    // 사진 용량을 바이트에서 MB로 변환
    setFileSizeInMB(fileBlob.size / (1024 * 1024));

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
          // 인증 기록 탭으로 변경
          setActiveTab(0);
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
        {isComplete ? (
          <EmptyState>
            <span>
              축하해요! <br />
              챌린지 인증 횟수를 충족하여 <br />
              <span className='highlight'>챌린지를 완수</span>하였습니다.
            </span>
          </EmptyState>
        ) : endDateInDate > todayDate ? (
          <EmptyState>
            <span>
              앗! <span className='highlight'>챌린지 참여 기간이 종료되어</span>{' '}
              <br />더 이상 인증할 수 없습니다.
            </span>
          </EmptyState>
        ) : (
          <>
            <Box height='16px' />
            <Textarea
              placeholder='어떻게 챌린지를 수행했는지 기록을 남겨보세요.'
              value={content}
              onChange={handleContentChange}
              minValueLength={MIN_CONTENT_LENGTH}
              valid={isContentValid}
            />
            {image && (
              <>
                <PreviewImageContainer>
                  <PreviewImage id='previewImage' src='' />
                  <DeleteImageButton onClick={handleDeleteImage}>
                    <IoClose size='24' />
                  </DeleteImageButton>
                </PreviewImageContainer>
                <Text
                  fontSize='var(--font-size-xs)'
                  color='var(--color-grey-01)'
                  textAlign='right'
                  margin='8px 16px 0'
                >
                  사진 용량: {fileSizeInMB.toFixed(2)} MB
                </Text>
              </>
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
              {image ? '사진 변경' : '사진 업로드'}
            </AddImage>
          </>
        )}
        <Caution />
      </Wrapper>
      {!isComplete && (
        <CTAContainer>
          <CTA
            label='등록하기'
            disabled={isUploadDisabled}
            onClick={handleSave}
          />
        </CTAContainer>
      )}
    </>
  );
};

export default Verification;

const Wrapper = styled.form`
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
