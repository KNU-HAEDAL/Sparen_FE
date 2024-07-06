import { MainBar } from './components/MainBar';
import PageBar from './components/PageBar';

// 이 곳에서 다 처리해야함
// 1. Main 페이지에서의 Top - Bar
// Logo, Project 이름, 로그인 버튼, 흰색 바탕
// 2. Main 이외의 페이지에서 Top - Bar
// 2-1. 이전 버튼 - 흰색바탕, 민트색 화살표
// 2-2. 이전 버튼 - 색 바탕, 흰색 화살표,

const TopBar: React.FC<TopBarPropsType> = ({ type, ...props }) => {
  if (type === 'Main') {
    // const { title } = props;
    return <MainBar />;
  } else if (type === 'Page') {
    const { title, backgroundColor } = props;
    return <PageBar title={title} BackgroundColor={backgroundColor} />;
  }
  return null;
};
export default TopBar;
