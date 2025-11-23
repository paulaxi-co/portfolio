import { RightArrowIcon } from "@/components/common/icons/right-arrow";
import { Button, Container, Stack } from "@mui/material";

interface ProjectButtonProps {
  text: string;
  href: string;
}
export function ProjectButton({ text, href }: ProjectButtonProps) {
  return (
    <Container>
      <Stack className="min-h-[200px]" justifyContent="center" alignItems="center">
        <Button href={href} target="_blank" variant="contained">
          <Stack direction='row' alignItems="center">
            <span>
              {text}
            </span>
            <RightArrowIcon />
          </Stack>
        </Button>
      </Stack>
    </Container>
  );
}
