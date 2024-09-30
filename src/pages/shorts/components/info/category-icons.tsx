import EcoIcon from '@/assets/main/Eco-Logo.svg';
import HeartIcon from '@/assets/main/Heart-Logo.svg';
import ShareIcon from '@/assets/main/Nanum-Logo.svg';
import VolunteerIcon from '@/assets/main/Volunteer-Logo.svg';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER' | 'ETC' | undefined;
};

const categoryData = {
  HEALTH: { icon: HeartIcon, borderColor: '#FF0000' },
  ECHO: { icon: EcoIcon, borderColor: '#5DB075' },
  SHARE: { icon: ShareIcon, borderColor: '#FFB636' },
  VOLUNTEER: { icon: VolunteerIcon, borderColor: '#599BE8' },
  ETC: { icon: EcoIcon, borderColor: '#000' },
};

const CategoryIcon = ({ category }: Props) => {
  const selectedCategory = category ? categoryData[category] : categoryData.ETC;

  return (
    <ShortsInfoIconBox borderColor={selectedCategory.borderColor}>
      <Image width='1.5rem' height='1.5rem' src={selectedCategory.icon} />
    </ShortsInfoIconBox>
  );
};

export default CategoryIcon;

const ShortsInfoIconBox = styled.div<{ borderColor: string }>`
  display: flex;
  width: 4rem;
  height: 3.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #fff;
  border: 1.5px solid ${({ borderColor }) => borderColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
