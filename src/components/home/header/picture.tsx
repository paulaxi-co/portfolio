import { RightArrowIcon } from "@/components/common/icons/right-arrow";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Picture() {

  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center">
      <Image width={330} height={430} sizes="(max-width: 640px) 78vw, 330px" alt="Pau smiling" src="/pau.png" className="h-auto w-[min(78vw,330px)]" priority />
      <div className="absolute bottom-2 left-1/2 flex h-[58px] w-max max-w-[calc(100vw-40px)] -translate-x-1/2 items-center gap-1 rounded-[33px] border border-primary-400 bg-white/10 p-[6px] backdrop-blur-sm sm:h-[66px] sm:gap-2 sm:p-[8px]">
        <span className="px-3 text-base font-[500] text-white sm:px-4 sm:text-[18px]">Portfolio</span>
        <Button  onClick={() => router.push('#contact')} variant="contained">
          <span>
            Let&#39;s Chat
          </span>
          <RightArrowIcon className="rotate-45 ml-2"/>
        </Button>
      </div>
    </div>
  );
}
