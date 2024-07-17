import * as S from '../../styles';
import * as Base from '@/styles/baseStyles';

const EmailLogin = () => {
  return (
    <>
      <Base.Container flexDirection='column' gap='2px' mgTop='2rem'>
        <S.LoginInput type='text' placeholder='이메일을 입력해주세요.' />
        <S.LoginInput type='password' placeholder='비밀번호를 입력해주세요.' />
      </Base.Container>
      <Base.Container
        textAlign='center'
        mgTop='1rem'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        mgRow='auto'
        mgColumn='2rem'
      >
        <Base.button
          bgColor='var(--color-green-01)'
          radius='0.5rem'
          width='15rem'
          height='2.5rem'
          pdColumn='0'
          pdRow='0.5rem'
        >
          <Base.Text textAlign='center' color='#fff' fontWeight='700'>
            로그인
          </Base.Text>
        </Base.button>
      </Base.Container>
    </>
  );
};

export default EmailLogin;
