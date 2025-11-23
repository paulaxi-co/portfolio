import { RightArrowIcon } from "@/components/common/icons/right-arrow";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Picture() {

  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center">
      <Image width={330} height={0} alt="Pau smiling" src="/pau.png"/>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-[66px] backdrop-blur-sm p-[8] rounded-[33px] flex gap-[8px] items-center border border-primary-400 w-max bg-white/10">
        <span className="text-[18px] font-[500] text-white px-4">Portfolio</span>
        <Button  onClick={() => router.push('#contact')} variant="contained">
          <span>
            Let&#39;s Chat
          </span>
          <RightArrowIcon className="-rotate-45"/>
        </Button>
      </div>
    </div>
  );
}
