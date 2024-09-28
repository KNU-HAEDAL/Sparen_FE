import { ReactElement } from 'react';

import styled from '@emotion/styled';

type TapPanelsProps = {
  children: ReactElement[];
};

export const TabPanels = ({ children }: TapPanelsProps) => {
  return <StyledTabPanels>{children}</StyledTabPanels>;
};

type TabPanelProps = {
  children?: ReactElement;
  value: number;
  selectedIndex: number;
};

export const TabPanel = ({ children, value, selectedIndex }: TabPanelProps) => {
  const hidden: boolean = value !== selectedIndex;

  return (
    <StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </StyledTabPanel>
  );
};

export const StyledTabPanels = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  text-align: center;
`;

export const StyledTabPanel = styled.div<{
  active: boolean;
}>`
  display: ${(p) => (p.active ? 'flex' : 'none')};
  font-size: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
