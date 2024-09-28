import NavBar from '@/components/features/layout/nav-bar';
import { Box } from '@chakra-ui/react';

type NavBarLayoutTypes = {
  children: React.ReactNode;
};

const NavBarLayout = ({ children }: NavBarLayoutTypes) => {
  return (
    <Box>
      <Box flex={1}>{children}</Box>
      <NavBar />
    </Box>
  );
};

export default NavBarLayout;
