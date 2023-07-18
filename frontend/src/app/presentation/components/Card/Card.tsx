import { Box, Button, Card, CardContent, Stack } from '@mui/material';
import { Text } from '../../common/Text';
import { IntrusionPreventionRules } from '../../../domain/entities/intrusionPreventionRules';
import { theme } from '../../../../styles/theme';
import { useState } from 'react';
import { MyDialog } from '../Dialog/Dialog';

type props = {
  ips: IntrusionPreventionRules;
};

export const MyCard = ({ ips }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box position={'relative'}>
      <Card sx={{ width: '26.4rem', height: '34.9rem' }} elevation={5}>
        <CardContent>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            marginBottom={'1rem'}
          >
            <Text fontSize={theme.sizes.small3}>ID: {ips.ID}</Text>
            <Text fontSize={theme.sizes.small3}>Severity: {ips.severity}</Text>
          </Stack>
          <Text fontSize={theme.sizes.medium} width={'90%'}>
            {ips.name}
          </Text>
          <Box position={'absolute'} bottom={'2rem'} left={'50%'}>
            <Button
              style={{ position: 'relative', left: '-50%' }}
              variant="contained"
              onClick={() => setIsOpen(true)}
            >
              <Text fontSize={theme.sizes.small3}>Description</Text>
            </Button>
            <MyDialog isOpen={isOpen} onClick={() => setIsOpen(false)}>
              {ips.description}
            </MyDialog>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
