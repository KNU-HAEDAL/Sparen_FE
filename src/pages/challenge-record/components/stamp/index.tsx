import StampActive from '@/assets/stamp-active.svg';
import StampInActive from '@/assets/stamp-inactive.svg';
import { Image } from '@chakra-ui/react';

type StampProps = {
  data: number;
};

const Stamp = ({ data }: StampProps) => {
  return (
    <>
      {data === -1 ? (
        <Image src={StampInActive} />
      ) : (
        <Image src={StampActive} />
      )}
    </>
  );
};

export default Stamp;
