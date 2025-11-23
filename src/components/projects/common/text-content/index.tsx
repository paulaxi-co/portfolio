import { Container, Typography, Stack } from "@mui/material";

interface ProjectTextContentProps {
  title?: string;
  text: string;
}
export function ProjectTextContent({ text, title }: ProjectTextContentProps) {
  return (
    <Container>
      <Stack spacing={4}>
        {!!title && (
          <Typography textAlign="center" variant="h2">{title}</Typography>
        )}
        <Typography>{text}</Typography>
      </Stack>
    </Container>
  );
}
