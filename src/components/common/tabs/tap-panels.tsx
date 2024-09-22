import { ReactElement } from 'react';

import * as S from './styles';

type TapPanelsProps = {
  children: ReactElement[];
};

export const TabPanels = ({ children }: TapPanelsProps) => {
  return <S.StyledTabPanels>{children}</S.StyledTabPanels>;
};

type TabPanelProps = {
  children?: ReactElement;
  value: number;
  selectedIndex: number;
};

export const TabPanel = ({ children, value, selectedIndex }: TabPanelProps) => {
  const hidden: boolean = value !== selectedIndex;

  return (
    <S.StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </S.StyledTabPanel>
  );
};
