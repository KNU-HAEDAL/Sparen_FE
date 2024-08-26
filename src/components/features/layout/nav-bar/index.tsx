import NavBarButtons from './buttons.tsx';
import { Box } from '@chakra-ui/react';

type NavBarTypes = {
  children: React.ReactNode;
};

const Index = ({ children }: NavBarTypes) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        height='100%'
        paddingBottom='3.44'
      >
        <Box flex={1}>{children}</Box>
        <NavBarButtons />
      </Box>
    </>
  );
};

export default Index;
