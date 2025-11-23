import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ProjectTwoPictureProps {
  src1: string;
  alt1: string;
  objectFit1?: 'cover' | 'contain';
  src2: string;
  alt2: string;
  objectFit2?: 'cover' | 'contain';
}
export function ProjectTwoPicture({ src1, src2, alt1, alt2, objectFit2, objectFit1 }: ProjectTwoPictureProps) {
  return (
    <div className="grid grid-cols-2 gap-12 pb-12">
      <Image className={twMerge("w-full rounded-lg shadow", objectFit1 === 'contain' && 'object-contain', objectFit1 === 'cover' && 'object-cover')} src={src1} alt={alt1} width={400} height={300} />
      <Image className={twMerge("w-full rounded-lg shadow top-12 relative", objectFit2 === 'contain' && 'object-contain', objectFit2 === 'cover' && 'object-cover')} src={src2} alt={alt2} width={400} height={300} />
    </div>
  );
}
