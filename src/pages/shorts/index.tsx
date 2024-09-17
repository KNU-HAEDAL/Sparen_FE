import ShortsContents from './components/contents';
import ShortsImage from './components/image';
import ShortsInfo from './components/info';
import { useGetShorts } from '@/apis/shorts/getShorts.api';
import TopBar from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// 가져온 data random으로 섞기
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Shorts = () => {
  const { data } = useGetShorts();

  console.log(data);
  let contentsData = data?.data.data?.map((item) => ({
    title: item.title,
    content: item.content,
  }));

  let infoData = data?.data.data?.map((item) => ({
    participantCount: item.participantCount,
    category: item.category,
  }));

  // data가 있을 때만 섞어주기
  if (contentsData && infoData) {
    const shuffledIndices = shuffleArray([
      ...Array(contentsData.length).keys(),
    ]);
    contentsData = shuffledIndices.map((index) => contentsData![index]);
    infoData = shuffledIndices.map((index) => infoData![index]);
  }

  return (
    <>
      <TopBar type='Page' title='' backgroundColor='var(--color--green-06)' />
      <ShortsLayout>
        <SwiperBox
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
        >
          {contentsData?.map((item, index) => (
            <SwiperSlide key={index}>
              <ShortsContents title={item.title} content={item.content} />
              <ShortsImage />
              {infoData && infoData[index] && (
                <ShortsInfo info={infoData[index]} />
              )}
            </SwiperSlide>
          ))}
        </SwiperBox>
      </ShortsLayout>
    </>
  );
};

export default Shorts;

const ShortsLayout = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
`;

const SwiperBox = styled(Swiper)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
