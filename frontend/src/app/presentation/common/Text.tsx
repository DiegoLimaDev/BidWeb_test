import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from 'react';

type props = TypographyProps;

export const Text = ({ children, ...props }: PropsWithChildren<props>) => {
  return <Typography {...props}>{children}</Typography>;
};
