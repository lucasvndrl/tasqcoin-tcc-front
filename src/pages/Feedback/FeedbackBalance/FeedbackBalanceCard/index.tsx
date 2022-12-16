import { Paper, Stack } from '@mui/material';
import { ReactNode } from 'react';

import { Typography } from '../../../../components';

type FeedbackBalanceCardProps = {
  title: string | ReactNode;
  icon: ReactNode;
  amount: number;
};

export const FeedbackBalanceCard = ({
  amount,
  icon,
  title,
}: FeedbackBalanceCardProps) => {
  return (
    <Paper sx={{ height: 90 }}>
      <Stack justifyContent="space-between" sx={{ p: 2 }} direction="row">
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{ fontWeight: 'medium' }}
            color="grey.400"
            variant="subtitle1"
          >
            {title}
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {icon}
          <Typography variant="points">{amount}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
