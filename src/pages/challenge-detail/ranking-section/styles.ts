import { TABS_HEIGHT } from '@/components/common/tabs';
import { HEADER_HEIGHT } from '@/components/features/layout/top-bar';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 0;
  /* min-height: calc(100vh - ${HEADER_HEIGHT} - ${TABS_HEIGHT}); */
`;

export const RankingList = styled.div`
  margin: 16px;
`;
