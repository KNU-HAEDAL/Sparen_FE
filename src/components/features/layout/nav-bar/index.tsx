import { useNavigate } from 'react-router-dom';

import { navBarData } from '@/constants/nav-bar';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNav = (page: string) => {
    navigate(page);
  };

  return (
    <Wrapper>
      {navBarData.map((item) => (
        <Tab key={item.title}>
          <Icon
            src={item.icon}
            // alt={item.title}
            onClick={() => handleNav(item.path)}
          />
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
  height: 3.44rem;

  position: sticky;
  bottom: 0;
  left: 0;

  border-top: 0.5px solid #bdc5cd;
  background-color: #fafafa;
`;

const Tab = styled.div`
  width: 50%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.button<{ src: string }>`
  width: 2rem;
  height: 2rem;
  outline: none;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
