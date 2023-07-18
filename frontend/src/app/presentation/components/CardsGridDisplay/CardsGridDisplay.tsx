import { Grid } from '@mui/material';
import { IntrusionPreventionRules } from '../../../domain/entities/intrusionPreventionRules';
import { MyCard } from '../Card/Card';

type props = {
  ipsData: IntrusionPreventionRules[];
};

export const CardsGridDisplay = ({ ipsData }: props) => {
  return (
    <Grid
      container
      justifyContent="center"
      margin="5rem 0"
      padding="0 3rem"
      gap={2}
    >
      {ipsData.map((item: IntrusionPreventionRules) => {
        return (
          <Grid key={item.name} item>
            <MyCard ips={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};
