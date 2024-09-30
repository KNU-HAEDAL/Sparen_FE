import ChallengeImg from '@/assets/shorts/shorts-img.png';
import { Image } from '@chakra-ui/react';

const ShortsImage = () => {
  return <Image objectFit='cover' src={ChallengeImg} />;
};

export default ShortsImage;
