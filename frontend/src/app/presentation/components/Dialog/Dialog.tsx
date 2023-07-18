import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { PropsWithChildren } from 'react';
import { theme } from '../../../../styles/theme';
import { Text } from '../../common/Text';

type props = {
  isOpen: boolean;
  onClick: () => void;
};

export const MyDialog = ({
  children,
  isOpen,
  onClick,
}: PropsWithChildren<props>) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <Text fontSize={theme.sizes.small3}>{children}</Text>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClick}>
          <Text fontSize={theme.sizes.small3}>Close</Text>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
