// import { Outlet } from 'react-router-dom';i
import NavButtons from './components/NavButtons';
import * as Styles from './styles';
import { NavBarTypes } from './type';

const NavBar: React.FC<NavBarTypes> = ({ children }) => {
  return (
    <>
      <Styles.MainContent>
        <Styles.ContentWrapper>{children}</Styles.ContentWrapper>
        <NavButtons />
      </Styles.MainContent>
    </>
  );
};

export default NavBar;
