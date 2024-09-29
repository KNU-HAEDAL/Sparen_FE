import { useNavigate } from 'react-router-dom';

import EcoIcon from '@/assets/main/Eco-Logo.svg';
import HealthIcon from '@/assets/main/Heart-Logo.svg';
import ShearIcon from '@/assets/main/Nanum-Logo.svg';
import VolunteerIcon from '@/assets/main/Volunteer-Logo.svg';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Category = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (category: string) => {
    sessionStorage.setItem('category', category);
    navigate('/challenge/list');
    console.log(`${category} 카테고리가 세션 스토리지에 저장되었습니다.`);
  };
  return (
    <>
      <Text
        fontSize='var(--font-size-xl)'
        fontWeight='700'
        color='#000'
        marginTop='1rem'
        marginLeft='1rem'
        marginBottom='1rem'
      >
        챌린지 카테고리
      </Text>
      <CategoryLayout>
        <CategoryButtonContainer>
          <CategoryButton onClick={() => handleCategoryClick('ECHO')}>
            <CategoryButtonImage src={EcoIcon} />
          </CategoryButton>
          <Text fontSize='var(--font-size-xl)' fontWeight='700' color='#5DB075'>
            에코
          </Text>
        </CategoryButtonContainer>
        <CategoryButtonContainer>
          <CategoryButton onClick={() => handleCategoryClick('SHARE')}>
            <CategoryButtonImage src={ShearIcon} />
          </CategoryButton>
          <Text fontSize='var(--font-size-xl)' fontWeight='700' color='#FFB636'>
            나눔
          </Text>
        </CategoryButtonContainer>
        <CategoryButtonContainer>
          <CategoryButton onClick={() => handleCategoryClick('VOLUNTEER')}>
            <CategoryButtonImage src={VolunteerIcon} />
          </CategoryButton>
          <Text fontSize='var(--font-size-xl)' fontWeight='700' color='#599BE8'>
            봉사
          </Text>
        </CategoryButtonContainer>
        <CategoryButtonContainer>
          <CategoryButton onClick={() => handleCategoryClick('HEALTH')}>
            <CategoryButtonImage src={HealthIcon} />
          </CategoryButton>
          <Text fontSize='var(--font-size-xl)' fontWeight='700' color='#FF0000'>
            건강
          </Text>
        </CategoryButtonContainer>
      </CategoryLayout>
    </>
  );
};

export default Category;

const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

const CategoryLayout = styled(Container)`
  padding: 0rem 0.625rem;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CategoryButtonContainer = styled(Container)`
  padding: 0.3125rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.3125rem;
`;

const CategoryButton = styled(Container)`
  width: 4.375rem;
  height: 4.375rem;
  justify-content: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid #d4d6dd;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const CategoryButtonImage = styled.img`
  display: flex;
  width: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
`;
