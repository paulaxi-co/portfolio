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
        <Button href={href} target="_blank" variant="contained" className="group">
          <Stack direction='row' alignItems="center" spacing={1}>
            <span>
              {text}
            </span>
            <RightArrowIcon className="rotate-90 group-hover:rotate-45 transition" />
          </Stack>
        </Button>
      </Stack>
    </Container>
  );
}
