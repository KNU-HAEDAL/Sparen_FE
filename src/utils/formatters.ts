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
  let categoryStr;

  switch (category) {
    case 'HEALTH':
      categoryStr = '건강';
      break;
    case 'ECHO':
      categoryStr = '에코';
      break;
    case 'SHARE':
      categoryStr = '나눔';
      break;
    case 'VOLUNTEER':
      categoryStr = '봉사';
      break;
    case 'ETC':
      categoryStr = '기타';
      break;
    default:
      categoryStr = 'undefined';
  }

  return categoryStr;
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
  let ratingInComment;

  switch (rating) {
    case 5:
      ratingInComment = '최고예요 😆';
      break;
    case 4:
      ratingInComment = '만족해요 😀';
      break;
    case 3:
      ratingInComment = '무난해요 🙂';
      break;
    case 2:
      ratingInComment = '그저 그래요 😐';
      break;
    case 1:
      ratingInComment = '별로예요 🙁';
      break;
    default:
      ratingInComment = '';
  }

  return ratingInComment;
};

// 리뷰 - 체감 난이도
export const formatDifficulty = (difficulty: number): string => {
  let difficultyStr;

  switch (difficulty) {
    case 1:
      difficultyStr = '쉬워요';
      break;
    case 2:
      difficultyStr = '적당해요';
      break;
    case 3:
      difficultyStr = '어려워요';
      break;
    default:
      difficultyStr = 'undefined';
  }

  return difficultyStr;
};

// 리뷰 - 성취감
export const formatAchievement = (achievement: number): string => {
  let achievementStr;

  switch (achievement) {
    case 1:
      achievementStr = '뿌듯해요';
      break;
    case 2:
      achievementStr = '보통이에요';
      break;
    case 3:
      achievementStr = '잘 모르겠어요';
      break;
    default:
      achievementStr = 'undefined';
  }

  return achievementStr;
};
