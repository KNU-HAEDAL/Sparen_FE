import { useEffect } from 'react';

import * as S from './styles';
import { getUserInfo } from '@/apis/user/user.api';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/data/tierSchema';
import { useInfoStore, UserInfo } from '@/store/useInfoStore';
import * as Base from '@/styles/baseStyles';

const Tier = () => {
  // const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const { userInfo, setUserInfo } = useInfoStore();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
        const userData = response.data;

        const transformedUserInfo: UserInfo = {
          id: userData.id,
          nickname: userData.nickname,
          profileImageUrl: userData.profileImageUrl ?? '',
          email: userData.email ?? '',
          tierInfo: userData.tierInfo ?? {
            tier: '',
            totalExp: 0,
            currentExp: 0,
          },
        };

        setUserInfo(transformedUserInfo);
      } catch (error) {
        console.error('fetchUserInfo error: ', error);
      }
    };
    fetchUserInfo();
  }, [setUserInfo]);

  const tierDetails = userInfo?.tierInfo
    ? getTierDetails(userInfo?.tierInfo.tier)
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
              {userInfo?.nickname}
            </Base.Text>
            <Base.Container
              justifyContent='space-between'
              width='5rem'
              mgColumn='0.5rem'
              mgRow='1rem'
            >
              <Base.Text color={tierDetails?.color} fontWeight='700'>
                {userInfo?.tierInfo.tier}
              </Base.Text>
              <Base.Text color={tierDetails?.color} fontWeight='1rem'>
                {userInfo?.tierInfo.currentExp}
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
