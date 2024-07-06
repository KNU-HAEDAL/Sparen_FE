import StampActive from '../../../assets/StampActive.svg';
import StampInActive from '../../../assets/StampInactive.svg';
import * as Styles from './styles';

const Stamp = ({ data }) => {
  return (
    <>
      {data === -1 ? (
        <Styles.Stamp src={StampInActive} />
      ) : (
        <Styles.Stamp src={StampActive} />
      )}
    </>
  );
};

export default Stamp;
