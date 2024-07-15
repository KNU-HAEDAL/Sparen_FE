import { useCallback, useEffect, useState } from 'react';

import * as S from './styles';
import { getUserInfo } from '@/apis/user/user.api';
import { UserInfoResponse } from '@/apis/user/user.response';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/data/tierSchema';
import { UserData } from '@/interface/apis/user';
import { InfoState, useInfoStore } from '@/store/useInfoStore';
import * as Base from '@/styles/baseStyles';

const Tier = () => {
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const {
    setUserId,
    setUserNickname,
    setUserProfileImageUrl,
    setUserEmail,
    setUserTier,
    setUserTotalExp,
    setUserCurrentExp,
    userNickname,
    userTier,
    userCurrentExp,
  } = useInfoStore();

  const fetchUserInfo = useCallback(async () => {
    try {
      const response = await getUserInfo();
      const data: UserInfoResponse['data']['data'][0] = response.data.data[0];
      setUserInfo(data);
      setUserId(data.id);
      setUserNickname(data.nickname);
      setUserProfileImageUrl(data.profileImageUrl);
      setUserEmail(data.email);
      setUserTier(data.tierInfo.tier);
      setUserTotalExp(data.tierInfo.totalExp);
      setUserCurrentExp(data.tierInfo.currentExp);
    } catch (error) {
      console.error('fetchUserInfo error: ', error);
    }
  }, [
    setUserId,
    setUserNickname,
    setUserProfileImageUrl,
    setUserEmail,
    setUserTier,
    setUserTotalExp,
    setUserCurrentExp,
  ]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const tierDetails = userTier
    ? getTierDetails(userTier)
    : { color: 'var(--color-class-02)' };

  return (
    <>
      <Base.Text
        fontSize='1.25rem'
        fontWeight='700'
        mgLeft='1rem'
        mgBottom='0.5rem'
      >
        내 티어
      </Base.Text>
      <S.TierLayout>
        <S.InfoContainer>
          <S.ImgContainer>
            <S.ProfileImg src={ProfileImg} />
          </S.ImgContainer>
          <Base.Container
            flexDirection='column'
            justifyContent='center'
            alignItems='flex-start'
            gap='0.625rem'
          >
            <Base.Text fontSize='1.25rem' fontWeight='700' color='#000'>
              {userNickname}
            </Base.Text>
            <Base.Container
              justifyContent='space-between'
              width='5rem'
              mgColumn='0.5rem'
              mgRow='1rem'
            >
              <Base.Text color={tierDetails?.color} fontWeight='700'>
                {userTier}
              </Base.Text>
              <Base.Text color={tierDetails?.color} fontWeight='1rem'>
                {userCurrentExp}
              </Base.Text>
            </Base.Container>
          </Base.Container>
        </S.InfoContainer>
        <Base.TotalTierGraph
          width='100%'
          mgColumn='1rem'
          mgRow='0'
          height='0.3125rem'
          radius='0.125rem'
        >
          <Base.CurrentTierGraph
            width='1rem'
            height='0.3125rem'
            radius='0.125rem'
            bgColor={tierDetails?.color}
          />
        </Base.TotalTierGraph>
      </S.TierLayout>
    </>
  );
};

export default Tier;
