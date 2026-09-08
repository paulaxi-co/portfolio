import { Container, Grid, Typography } from "@mui/material";

interface TwoColTextProps {
  text1: string;
  text2: string;
}
export function TwoColText({ text1, text2 }: TwoColTextProps) {
  return (
    <Container>
      <Grid container columns={12} spacing={{xs: 4, md: 12}}>
        <Grid size={{xs: 12, md: 6}}>
          <Typography variant="h3">{text1}</Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <Typography>{text2}</Typography>
        </Grid>
      </Grid>
    </Container>
  );

}
