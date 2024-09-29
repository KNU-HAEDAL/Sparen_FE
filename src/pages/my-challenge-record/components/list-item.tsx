import ProfileImg from '@/assets/challenge/ZZAN-Green.png';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  challengeTitle: string;
  userNickname: string;
  profileImageUrl?: string | null;
};

const ListItem = ({ challengeTitle, profileImageUrl }: Props) => {
  return (
    <ListItemLayout>
      <ProfileContainer>
        <Image
          src={profileImageUrl || ProfileImg}
          alt='profile'
          width='1.5rem'
        />
      </ProfileContainer>
      <ListText fontWeight='700' fontSize='1.125rem'>
        {challengeTitle}
      </ListText>
    </ListItemLayout>
  );
};

export default ListItem;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  margin: 0.2rem 1rem;
  &:last-child {
    border-bottom: none;
  }
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
`;
