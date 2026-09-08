import { Typography } from "@mui/material";

interface ChipProps {
  label: string;
}
export function Chip({label} : ChipProps) {
  return (
    <div className="flex h-[36px] w-max flex-row items-center justify-center rounded-[19px] border border-primary-600 px-4">
      <Typography className="text-primary-600">
        {label}
      </Typography>
    </div>
  );
}
