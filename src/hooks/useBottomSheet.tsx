import { useEffect } from 'react';

import { useAnimation } from 'framer-motion';

const useBottomSheet = (isClick) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!isClick) {
      controls.start('hidden');
    } else if (isClick) {
      controls.start('visible');
    }
  }, [controls, isClick]);

  return { controls };
};

export default useBottomSheet;
