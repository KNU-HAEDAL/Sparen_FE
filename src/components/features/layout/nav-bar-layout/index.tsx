import NavBarButtons from '@/components/features/layout/nav-bar';
import { Box } from '@chakra-ui/react';

type NavBarTypes = {
  children: React.ReactNode;
};

const NavBarLayout = ({ children }: NavBarTypes) => {
  return (
    <Box>
      <Box flex={1}>{children}</Box>
      <Box position='sticky' bottom='0' display='flex'>
        <NavBarButtons />
      </Box>
    </Box>
  );
};

export default NavBarLayout;
