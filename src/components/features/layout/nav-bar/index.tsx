import { useNavigate } from 'react-router-dom';

import { navBarData } from '@/constants/nav-bar';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const NAVBAR_HEIGHT = '3.44rem';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNav = (page: string) => {
    navigate(page);
  };

  return (
    <Wrapper as='nav'>
      {navBarData.map((item) => (
        <Tab key={item.title} onClick={() => handleNav(item.path)}>
          <IconImage src={item.icon} alt={item.title} />
        </Tab>
      ))}
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${NAVBAR_HEIGHT};

  position: sticky;
  bottom: 0;
  left: 0;

  border-top: 0.5px solid #bdc5cd;
  background-color: #fafafa;
`;

const Tab = styled.a`
  width: 50%; // 요소마다 부모 요소의 너비를 균등하게 차지하도록
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconImage = styled(Image)`
  width: 2rem;
  height: 2rem;
  outline: none;
`;
