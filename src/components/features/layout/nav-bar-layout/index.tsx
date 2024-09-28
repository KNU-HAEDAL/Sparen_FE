import NavBar, { NAVBAR_HEIGHT } from '@/components/features/layout/nav-bar';
import { Box } from '@chakra-ui/react';

type NavBarLayoutTypes = {
  children: React.ReactNode;
};

const NavBarLayout = ({ children }: NavBarLayoutTypes) => {
  return (
    <Box>
      <Box minHeight={`calc(100vh - ${NAVBAR_HEIGHT})`}>{children}</Box>
      <NavBar />
    </Box>
  );
};

export default NavBarLayout;
