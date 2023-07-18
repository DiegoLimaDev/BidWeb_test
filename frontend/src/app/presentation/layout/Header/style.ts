import styled from '@emotion/styled';
import { Box, css } from '@mui/material';
import { motion } from 'framer-motion';

type container = {
  imgurl: string;
};

export const Container = styled(motion(Box))(
  ({ imgurl }: container) => css`
    background-image: url(${imgurl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 27%;
  `,
);
