import UserImage from '@/assets/UserImage.svg';
import styled from '@emotion/styled';

export const ProfileImage = styled.div<{ size?: number; src?: string }>`
  width: ${({ size }) => (size ? `${size}rem` : '3rem')};
  height: ${({ size }) => (size ? `${size}rem` : '3rem')};
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  background-image: url(${({ src }) => src || UserImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
