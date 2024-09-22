import { cloneElement, ReactElement, useEffect, useRef, useState } from 'react';

import * as S from './styles';

type TabsProps = {
  selectedTab: number;
  onChange: (value: number) => void;
  children: ReactElement[];
};

export const Tabs = ({ selectedTab, onChange, children }: TabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, [containerRef]);

  const sliderWidth = containerWidth / children.length;

  const tabs = children.map((child) => {
    const handleClick = () => {
      onChange(child.props.value);
    };

    return cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <S.StyledTabs ref={containerRef}>
      {tabs}
      <S.TabSlider width={sliderWidth} index={selectedTab} />
    </S.StyledTabs>
  );
};

type TabProps = {
  label: string;
  value: number;
  active?: boolean;
  onClick?: () => void;
};

export const Tab = ({ label, active, onClick }: TabProps) => {
  return (
    <S.StyledTab active={active} onClick={onClick}>
      {label}
    </S.StyledTab>
  );
};
