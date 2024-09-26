export const formatDate = (dateStr: string): string => {
  const dateObj = new Date(dateStr);

  return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;
  // 2024.00.00 형식으로 반환
};

// 숫자에 소수점 처리
export const formatToFixed = (number: number, digits = 1) => {
  return number.toFixed(digits);
};

// 숫자에 , 넣기
export const formatWithComma = (number: number) => {
  return number.toLocaleString();
};

// 챌린지 카테고리
export const formatCategory = (category: string | undefined): string => {
  switch (category) {
    case 'HEALTH':
      return '건강';
    case 'ECHO':
      return '에코';
    case 'SHARE':
      return '나눔';
    case 'VOLUNTEER':
      return '봉사';
    case 'ETC':
      return '기타';
    default:
      return '??';
  }
};

// const categoryList = [
//   { label: '건강', data: 'HEALTH' },
//   { label: '에코', data: 'ECHO' },
//   { label: '나눔', data: 'SHARE' },
//   { label: '봉사', data: 'VOLUNTEER' },
//   { label: '기타', data: 'ETC' },
// ];

// // data.category에 맞는 label 찾기
// const categoryLabel =
//   categoryList.find((c) => c.data === data?.category)?.label || '';

// 리뷰 - 별점
export const formatRating = (rating: number): string => {
  switch (rating) {
    case 5:
      return '최고예요 😆';
    case 4:
      return '만족해요 😀';
    case 3:
      return '무난해요 🙂';
    case 2:
      return '그저 그래요 😐';
    case 1:
      return '별로예요 🙁';
    default:
      return '';
  }
};

// 리뷰 - 체감 난이도
export const formatDifficulty = (difficulty: number): string => {
  switch (difficulty) {
    case 1:
      return '쉬워요';
    case 2:
      return '적당해요';
    case 3:
      return '어려워요';
    default:
      return '??';
  }
};

// 리뷰 - 성취감
export const formatAchievement = (achievement: number): string => {
  switch (achievement) {
    case 1:
      return '뿌듯해요';
    case 2:
      return '보통이에요';
    case 3:
      return '잘 모르겠어요';
    default:
      return 'undefined';
  }
};
