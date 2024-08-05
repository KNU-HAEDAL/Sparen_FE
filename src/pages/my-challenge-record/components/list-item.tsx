import ProfileImg from '@/assets/challenge/ZZAN-Green.png';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ListItem = () => {
  return (
    <ListItemLayout>
      <ProfileContainer>
        <Image src={ProfileImg} alt='profile' width='1.5rem' />
      </ProfileContainer>
      <ListText maxWidth='150px' fontWeight='700' fontSize='1.125rem'>
        쓰레기 줍기 챌린지
      </ListText>
      <Text maxWidth='70px' fontSize='0.8rem'>
        2024.08.05
      </Text>
    </ListItemLayout>
  );
};

export default ListItem;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  margin: 0.2rem 1rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  border-radius: 50%;
  border: 1px solid #5cc6ba;
  border-style: solid;
  stroke-width: 1px;
  stroke: var(--green--01, #5cc6ba);
  filter: drop-shadow(2px 3px 5px rgba(80, 153, 145, 0.5));
  padding: 0.5rem;
  margin-bottom: 0.25rem;
`;

const ListText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* max-width: 150px; */
`;
