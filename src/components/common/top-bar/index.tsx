import { useNavigate } from 'react-router-dom';

import * as Styles from '../top-bar/styles';
import PrevIcon from '@/assets/header/Prev-Icon.svg';

type TopBarProps = { title: string };

export const TopBar = ({ title }: TopBarProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Styles.prevbtnContainer onClick={handleBack}>
        <Styles.prevbtn src={PrevIcon} alt='Prev Icon' />
      </Styles.prevbtnContainer>
      <Styles.TopBarLayout>{title}</Styles.TopBarLayout>
    </>
  );
};
