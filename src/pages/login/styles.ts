import styled from '@emotion/styled';

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  background-color: #fff;
  /* height: 100vh; */
`;

export const ButtonBox = styled.div`
  display: flex;

  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 2rem auto;
  gap: 1rem;
`;
export const SocialLoginButton = styled.div<{
  bgColor?: string;
  borderColor?: string;
}>`
  display: flex;
  text-align: center;
  /* background-color: #fee500; */
  background-color: ${(props) => props.bgColor};
  /* width: 3rem; */

  height: 2.5rem;
  border-radius: 0.5rem;
  align-items: center;
  border: 1px solid ${(props) => props.borderColor};
`;

export const socialLoginBar = styled.hr`
  position: relative;
  bottom: -8px;
  display: block;
  margin: 0;
  width: 80%;
  height: 1px;
  background-color: #f1f3f5;
  border: none;
`;

export const socialLoginText = styled.span`
  padding: 0 1rem;
  margin-bottom: 16px;
  font-size: var(--font-size-sm);
  line-height: 16px;
  letter-spacing: -0.3px;
  color: #abb0b5;
  z-index: 1;
  background-color: #fff;
`;
