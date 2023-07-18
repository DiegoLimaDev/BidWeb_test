import { framerVariants } from '../../../../utils/framerVariants';
import * as styled from './style';

export const Header = () => {
  return (
    <styled.Container
      imgurl="/static/images/bid_back.jpg"
      height={'35rem'}
      width={'100%'}
      variants={framerVariants}
      initial="opacity0"
      animate="opacity1"
    >
      Header
    </styled.Container>
  );
};
