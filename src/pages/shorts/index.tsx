import { useEffect, useState } from 'react';

import ShortsContents from './components/contents';
import ShortsImage from './components/image';
import ShortsInfo from './components/info';
import { useGetShorts } from '@/apis/shorts/getShorts.api';
import TopBar from '@/components/features/layout/top-bar';
import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Short = {
  title: string;
  content: string;
  participantCount: number;
  category: 'HEALTH' | 'ECHO' | 'SHARE' | 'VOLUNTEER' | 'ETC';
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Shorts = () => {
  const [page, setPage] = useState(0);
  const [allData, setAllData] = useState<Short[]>([]);
  const { data, isLoading } = useGetShorts(page, 20);

  console.log(data);
  useEffect(() => {
    if (data) {
      setAllData((prevData) => [...prevData, ...data.data.data]);
    }
  }, [data]);

  const loadNextPage = () => {
    if (data?.data.hasNext && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const contentsData = shuffleArray(
    allData.map((item) => ({
      title: item.title,
      content: item.content,
    }))
  );

  const infoData = shuffleArray(
    allData.map((item) => ({
      participantCount: item.participantCount,
      category: item.category,
    }))
  );

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
          onSlideChange={(swiper) => {
            if (swiper.isEnd) {
              loadNextPage();
            }
          }}
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
        {isLoading && <LoadingSpinner />}
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

const LoadingSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
