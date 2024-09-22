import {
  cloneElement,
  forwardRef,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import * as S from './styles';

type TabsProps = {
  selectedTab: number;
  onChange: (value: number) => void;
  children: ReactElement[];
};

export const Tabs = ({ selectedTab, onChange, children }: TabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]); // Tab refs 배열
  const [tabWidths, setTabWidths] = useState<number[]>([]); // 각 Tab 너비 저장

  // 각 Tab의 너비를 계산하여 상태로 저장
  useEffect(() => {
    if (tabRefs.current.length > 0) {
      const widths = tabRefs.current.map(
        (ref) => ref?.getBoundingClientRect().width || 0
      );
      setTabWidths(widths);
    }
  }, [children]);

  const sliderWidth = tabWidths[selectedTab] - 4 || 0; // 여백 4px 빼기

  const tabs = children.map((child, index) => {
    const handleClick = () => {
      onChange(child.props.value);
    };

    return cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
      ref: (el: HTMLDivElement) => (tabRefs.current[index] = el), // Tab 요소에 ref 연결
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

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ label, active, onClick }, ref) => {
    return (
      <S.StyledTab active={active} onClick={onClick} ref={ref}>
        {label}
      </S.StyledTab>
    );
  }
);

// displayName 설정으로 경고 해결
Tab.displayName = 'Tab';
