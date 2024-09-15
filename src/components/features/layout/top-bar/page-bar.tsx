import { useNavigate } from 'react-router-dom';

import PrevIcon from '@/assets/top-bar/Prev-Icon.svg';
import { Box, Image, Text } from '@chakra-ui/react';
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
  const handlerNavigate = () => {
    navigate(-1);
  };
  return (
    <PageBarLayout
      height={height}
      backgroundColor={backgroundColor}
      show={show}
    >
      <PrevButtonBox onClick={handlerNavigate}>
        <Image width='0.8rem' height='1.45rem' src={PrevIcon} alt='Prev Icon' />
      </PrevButtonBox>
      <TitleBox>
        <Text
          fontSize='var(--font-size-xl)'
          fontWeight='700'
          fontStyle='normal'
          lineHeight='normal'
        >
          {title}
        </Text>
      </TitleBox>
      <EmptyBox>&nbsp;</EmptyBox>
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
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: ${({ height }) => height};
  padding: 0.5rem;
  gap: 1rem;
  background-color: ${(props) => props.backgroundColor};
  z-index: 1000;
  position: sticky;
  top: ${({ show }) => (show ? '0' : '-100px')};
  transition: top 0.3s;
`;

const TitleBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyBox = styled(Box)`
  display: flex;
  width: 2.8125rem;
  height: 1.6875rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const PrevButtonBox = styled(Box)`
  display: flex;
  width: 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 0.625rem;
`;
