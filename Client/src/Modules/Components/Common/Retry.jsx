import { Button, Stack, Typography } from "@mui/material";

export default function Retry({ onRetry }) {
  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h6">Something went wrong</Typography>
      <Button variant="contained" size="small" onClick={onRetry}>Retry</Button>
    </Stack>
  );
}
