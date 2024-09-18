import ErrorImg from '@/assets/challenge/ZZAN-Black.png';
import TopBar from '@/components/features/layout/top-bar';
import { Button, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ErrorPage = () => {
  return (
    <>
      <TopBar type='Page' title='' backgroundColor='' />
      <ErrorPageLayout>
        <Image src={ErrorImg} width='5rem' />
        <Text fontSize='4rem' fontWeight='bold'>
          404
        </Text>
        <Text fontSize='1.5rem' fontWeight='bold'>
          Not Found
        </Text>
        <a href='/'>
          <NavButton>메인으로 이동</NavButton>
        </a>
      </ErrorPageLayout>
    </>
  );
};

export default ErrorPage;

const ErrorPageLayout = styled.div`
  display: flex;
  margin-top: 5rem;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const NavButton = styled(Button)`
  margin: 4rem 0;
  padding: 0.25rem 1rem;
  color: var(--color-green-02);
  background-color: #fff;
  border: 2px solid var(--color-green-02);
  font-size: var(--font-size-lg);

  :active {
    background-color: var(--color-green-02);
    color: #fff;
  }
`;
