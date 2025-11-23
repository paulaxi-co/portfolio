import { Container, Grid, Typography } from "@mui/material";

interface TwoColTextProps {
  text1: string;
  text2: string;
}
export function TwoColText({ text1, text2 }: TwoColTextProps) {
  return (
    <Container>
      <Grid container columns={2} spacing={12}>
        <Grid size={1}>
          <Typography variant="h3">{text1}</Typography>
        </Grid>
        <Grid size={1}>
          <Typography>{text2}</Typography>
        </Grid>
      </Grid>
    </Container>
  );

}
