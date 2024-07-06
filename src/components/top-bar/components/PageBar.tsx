import { useNavigate } from 'react-router-dom';

import * as styles from '../styles';
import PrevIcon from '@/assets/top-bar/Prev-Icon.svg';

const PageBar = ({ title, BackgroundColor }) => {
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate('/');
  };
  return (
    <>
      <styles.TopBarLayout BackgroundColor={BackgroundColor}>
        <styles.prevbtnContainer onClick={handlerNavigate}>
          <styles.prevbtn src={PrevIcon} alt='Prev Icon' />
        </styles.prevbtnContainer>
        <styles.TopBarTitleContainer>
          <styles.TopBarTitle>{title}</styles.TopBarTitle>
        </styles.TopBarTitleContainer>
        <styles.EmptyContainer>&nbsp;</styles.EmptyContainer>
      </styles.TopBarLayout>
    </>
  );
};

export default PageBar;
