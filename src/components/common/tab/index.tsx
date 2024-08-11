import {
  cloneElement,
  MouseEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import * as S from './styles';

type TabProps = {
  label: string;
  value: number;
  active?: boolean;
  onClick?: () => void;
};

type TabsProps = {
  selectedTab: number;
  onChange: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: number
  ) => void;
  children: ReactElement[];
  position?: string;
};

type TabPanelProps = {
  children?: ReactElement;
  value: number;
  selectedIndex: number;
};

export const Tab = ({ label, active, onClick }: TabProps) => {
  return (
    <S.StylizedTab active={active} onClick={onClick}>
      {label}
    </S.StylizedTab>
  );
};

export const Tabs = ({
  selectedTab,
  onChange,
  children,
  position,
}: TabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, [containerRef]);

  const sliderWidth = containerWidth / children.length;

  const tabs = children.map((child) => {
    const handleClick = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
      onChange(e, child.props.value);
    };

    return cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <S.TabHeaderContainer position={position} ref={containerRef}>
      <S.TabsHolder>{tabs}</S.TabsHolder>
      <S.TabSlider width={sliderWidth} index={selectedTab} />
    </S.TabHeaderContainer>
  );
};

export const TabPanel = ({ children, value, selectedIndex }: TabPanelProps) => {
  const hidden: boolean = value !== selectedIndex;

  return (
    <S.StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </S.StyledTabPanel>
  );
};
