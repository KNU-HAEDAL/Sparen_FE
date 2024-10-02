import ProfileImg from '@/assets/challenge/ZZAN-Green.png';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  challengeTitle: string;
  userNickname: string;
  profileImageUrl?: string | null;
  id: number;
  onClick: (id: number) => void;
};

const ListItem = ({ challengeTitle, profileImageUrl, onClick, id }: Props) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <ListItemLayout onClick={handleClick}>
      <ProfileContainer>
        <Image
          src={profileImageUrl || ProfileImg}
          alt='profile'
          width='1.5rem'
        />
      </ProfileContainer>
      <ListText fontWeight='600' fontSize='1rem'>
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
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid var(--color-green-06);
  padding: 8px 0;

  &:last-child {
    border-bottom: none;
  }
`;

const ProfileContainer = styled.div`
  width: 2.5rem;
  aspect-ratio: 1 / 1;
  display: flex;
  border-radius: 50%;
  border: 1px solid var(--color-green-01);
  border-style: solid;
  stroke-width: 1px;
  stroke: var(--green--01, var(--color-green-01));
  filter: drop-shadow(2px 3px 5px rgba(80, 153, 145, 0.5));
  padding: 0.5rem;
`;

const ListText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
