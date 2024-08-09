import { useNavigate } from 'react-router-dom';

import TitleLogo from '@/assets/main/ZZAN-Default.png';
import { RouterPath } from '@/routes/path';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MainTitle = () => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate(RouterPath.root);
  };

  return (
    <>
      <TitleBox onClick={handlerNavigate}>
        <LogoBox>
          <Image
            width='2rem'
            color='var(--color-green-01)'
            src={TitleLogo}
            alt='ZZAN Logo'
          />
        </LogoBox>
        <Text fontSize='1.75rem' color='var(--color-green-01)'>
          ZZANSUNI
        </Text>
      </TitleBox>
    </>
  );
};

export default MainTitle;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  margin: 1rem 0.5rem 1rem 0.5rem;
  cursor: pointer;
  gap: 1rem;
`;

const LogoBox = styled.div`
  border: 1.5px solid var(--color-green-01);
  padding: 0.25rem;
  border-radius: 50%;
`;
