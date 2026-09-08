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
      <Image sizes="(max-width: 1200px) 100vw, 1200px" className={`max-h-[600px] h-auto w-full rounded-lg ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`} width={1920} height={1080} src={src} alt={alt} />
    </Container>
  );
}
