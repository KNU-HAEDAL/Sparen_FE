import StampActive from '@/assets/stamp-active.svg';
import StampInActive from '@/assets/stamp-inactive.svg';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type StampProps = {
  item: number;
  onClick?: () => void;
};

const Stamp = ({ item, onClick }: StampProps) => {
  const active = item !== -1 ? true : false; // -1이면 inactive

  return (
    <>
      {active ? (
        <StyledStamp src={StampActive} active={active} onClick={onClick} />
      ) : (
        <StyledStamp src={StampInActive} active={active} />
      )}
    </>
  );
};

export default Stamp;

const StyledStamp = styled(Image)<{ active: boolean }>`
  aspect-ratio: 1 / 1;
  cursor: ${({ active }) => (active ? 'pointer' : null)};
`;
