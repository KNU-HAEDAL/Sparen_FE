import StampActive from '@/assets/StampActive.svg';
import StampInActive from '@/assets/StampInactive.svg';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type StampProps = {
  data: number;
};

const Stamp = ({ data }: StampProps) => {
  return (
    <>
      {data === -1 ? (
        <StampImage src={StampInActive} />
      ) : (
        <StampImage src={StampActive} />
      )}
    </>
  );
};

export default Stamp;

const StampImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin: 5px auto;
`;
