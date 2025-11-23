import { Container } from "@mui/material";
import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain';
}
export function ProjectImage({ src, alt, objectFit }: ProjectImageProps) {
  return (
    <Container>
      <Image className={`w-full h-[600px] rounded-lg ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`} width={1920} height={1080} src={src} alt={alt} />
    </Container>
  );
}
