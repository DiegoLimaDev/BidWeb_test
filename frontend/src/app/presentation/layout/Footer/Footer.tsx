import { Box } from '@mui/material';
import { Text } from '../../common/Text';
import { theme } from '../../../../styles/theme';

export const Footer = () => {
  return (
    <Box width={'100%'} height={'4rem'} bgcolor={theme.colors.fifthColor}>
      <Text
        color={theme.colors.white}
        fontSize={theme.sizes.medium}
        textAlign={'center'}
      >
        Diego Lima da Silva 2023
      </Text>
    </Box>
  );
};
