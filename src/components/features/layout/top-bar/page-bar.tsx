import { useNavigate } from 'react-router-dom';

import PrevIcon from '@/assets/top-bar/Prev-Icon.svg';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PageBar = ({
  title,
  height,
  backgroundColor,
  show,
}: {
  title: string;
  height: string;
  backgroundColor: string;
  show: boolean;
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <PageBarLayout
      height={height}
      backgroundColor={backgroundColor}
      show={show}
    >
      <PrevButton onClick={handleBack}>
        <Image
          width='1.25rem'
          height='1.25rem'
          src={PrevIcon}
          alt='Prev Icon'
        />
      </PrevButton>
      <Title>{title}</Title>
    </PageBarLayout>
  );
};

export default PageBar;

const PageBarLayout = styled(Box)<{
  height: string;
  backgroundColor: string;
  show: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: ${({ height }) => height};
  padding: 0 16px;
  background-color: ${(props) => props.backgroundColor};
  z-index: 10;
  position: sticky;
  top: ${({ show }) => (show ? '0' : '-100px')};
  transition: top 0.3s;
`;

const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  outline: none;
`;

const Title = styled.p`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  font-size: var(--font-size-xl);
  font-weight: 700;
`;
