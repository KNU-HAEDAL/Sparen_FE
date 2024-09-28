import { useNavigate } from 'react-router-dom';

import { navBarData } from '@/constants/nav-bar';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNav = (page: string) => {
    navigate(page);
  };

  return (
    <Wrapper>
      {navBarData.map((item) => (
        <Box width='2rem' height='2rem' flexShrink={0} key={item.title}>
          <Image
            onClick={() => handleNav(item.path)}
            src={item.icon}
            alt={item.title}
          />
        </Box>
      ))}
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;

  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;

  height: 3.44rem;

  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  border-top: 0.5px solid #bdc5cd;
  background-color: #fafafa;
`;
