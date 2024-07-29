import { useEffect, useRef, useState } from 'react';

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// import {
//   TabHeaderContainer,
//   StylizedTab,
//   StyledTabPanel,
//   TabsHolder,
//   inactiveTab,
//   TabSlider,
// } from './styles';

export const Tab = ({ label, active, onClick }) => {
  return (
    <StylizedTab active={active} onClick={onClick} inactiveStyle={inactiveTab}>
      {label}
    </StylizedTab>
  );
};

export const Tabs = ({ selectedTab, onChange, children, position }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setContainerWidth(containerRef.current.getBoundingClientRect().width);
  }, [containerRef]);

  const sliderWidth = containerWidth / children.length;

  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <TabHeaderContainer position={position} ref={containerRef}>
      <TabsHolder>{tabs}</TabsHolder>
      <TabSlider width={sliderWidth} index={selectedTab} />
    </TabHeaderContainer>
  );
};

export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;

  return (
    <StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </StyledTabPanel>
  );
};

const TabHeaderContainer = styled.div`
  /* position: absolute; */
  position: ${(props) => props.position || 'absolute'};
  width: 100%;
`;

const StylizedTab = styled.div`
  z-index: 1;
  color: var(--color-grey-02);
  width: 100%;
  font-size: var(--font-size-md);
  background-color: transparent;
  border: none;
  height: 50px;
  margin-top: 3px;
  text-align: center;
  line-height: 50px;

  ${(p) =>
    p.active &&
    css`
      color: var(--color-white);
      font-weight: bold;
      border-radius: 20px;
      animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

const inactiveTab = {
  opacity: 0.65,
};

const TabSlider = styled.div`
  position: absolute;
  top: 3px;
  width: ${(props) => `${props.width}px`};
  height: 50px;
  background-color: var(--color-green-01);
  border-radius: 20px;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(92, 198, 186, 0);
            box-shadow: 0 0 0 0 rgba(92, 198, 186, 0);
  }
  100% {
    -webkit-box-shadow: 3px 3px 3px rgba(92, 198, 186, 0.5);
            box-shadow: 3px 3px 3px rgba(92, 198, 186, 0.5);
  }
`;

const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? 'flex' : 'none')};
  font-size: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
