import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../application/hooks';
import { useEffect } from 'react';
import { fetchIPS } from '../../application/IntrusionPreventionRules/IPS.slice';
import { Box, Pagination } from '@mui/material';
import { CardsGridDisplay } from '../components/CardsGridDisplay/CardsGridDisplay';
import { Text } from '../common/Text';
import { theme } from '../../../styles/theme';

export const Home = () => {
  const { page } = useParams();
  const dispatch = useAppDispatch();
  const { ipsData } = useAppSelector((state) => state.ipsSlice);
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/${value}`);
  };

  useEffect(() => {
    dispatch(fetchIPS(Number(page)));
  }, [page]);

  return (
    <div style={{ minHeight: '80vh' }}>
      {ipsData.length !== 0 && (
        <>
          <CardsGridDisplay ipsData={ipsData} />
          <Box display={'block'} margin={'2rem auto'} width={'fit-content'}>
            <Pagination
              variant="outlined"
              color="secondary"
              count={ipsData.length * 2}
              onChange={handleChange}
              style={{ height: '4rem', fontSize: '100%' }}
              size="large"
            />
          </Box>
        </>
      )}
      {ipsData.length === 0 && (
        <>
          <Text
            fontSize={theme.sizes.big}
            textAlign={'center'}
            marginTop={'5rem'}
          >
            Não há dados para serem exibidos. Certifique-se de que o servidor
            flask está ativo
          </Text>
        </>
      )}
    </div>
  );
};
