import { useNavigate } from 'react-router-dom';

import { NavBarData } from './data';
import * as Styles from './styles';

const NavButtons = () => {
  const navigate = useNavigate();
  const handlerNav = (page: string) => {
    navigate(page);
  };
  return (
    <>
      <Styles.NavigateBarLayout>
        {NavBarData.map((item) => (
          <Styles.IconContainer key={item.title}>
            <Styles.NavIcon
              onClick={() => handlerNav(item.path)}
              src={item.icon}
              alt={item.title}
            />
          </Styles.IconContainer>
        ))}
      </Styles.NavigateBarLayout>
    </>
  );
};

export default NavButtons;
