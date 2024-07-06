import * as styles from '../styles';
import Logo from '@/assets/top-bar/ZZAN-Default.png';
import * as commonStyle from '@/styles/commonStyles';

export const MainBar = () => {
  return (
    <>
      <styles.TopBarLayout>
        <styles.Container>
          <styles.LogoContainer>
            <commonStyle.Img width='2rem' src={Logo} alt='ZZAN Logo' />
          </styles.LogoContainer>
          <commonStyle.Text
            fs='var(--font-size-xxl)'
            fw='bold'
            color='var(--color-green-01)'
          >
            ZZANSUNI
          </commonStyle.Text>
        </styles.Container>
        <commonStyle.button radius='0.5rem' borderColor='var(--color-green-01)'>
          <commonStyle.Text
            fs='var(--font-size-md)'
            fw='bold'
            color='var(--color-green-01)'
          >
            로그인
          </commonStyle.Text>
        </commonStyle.button>
      </styles.TopBarLayout>
    </>
  );
};
