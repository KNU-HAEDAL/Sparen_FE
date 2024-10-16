import { useEffect, useState } from 'react';

import MainBar from './main-bar';
import PageBar from './page-bar';

// 이 곳에서 다 처리해야함
// 1. Main 페이지에서의 Top - Bar
// Logo, Project 이름, 로그인 버튼, 흰색 바탕
// 2. Main 이외의 페이지에서 Top - Bar
// 2-1. 이전 버튼 - 흰색바탕, 민트색 화살표
// 2-2. 이전 버튼 - 색 바탕, 흰색 화살표,

type TopBarProps = {
  type: 'Main' | 'Page';
  title: string;
  backgroundColor: string;
};

export const HEADER_HEIGHT = '3rem';

const TopBar = ({ type, ...props }: TopBarProps) => {
  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  if (type === 'Main') {
    return <MainBar height={HEADER_HEIGHT} show={show} />;
  } else if (type === 'Page') {
    const { title, backgroundColor } = props;
    return (
      <PageBar
        title={title}
        height={HEADER_HEIGHT}
        backgroundColor={backgroundColor}
        show={show}
      />
    );
  }
  return null;
};

export default TopBar;
