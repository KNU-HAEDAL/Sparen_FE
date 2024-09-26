export const formatDate = (dateStr: string) => {
  const dateObj = new Date(dateStr);

  return `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;
  // 2024.00.00 형식으로 반환
};

// 리뷰에 필요
export const formatDifficulty = (difficulty: number) => {
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

// 리뷰에 필요
export const formatAchievement = (achievement: number) => {
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
