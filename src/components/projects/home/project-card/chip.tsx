import { Typography } from "@mui/material";

interface ChipProps {
  label: string;
}
export function Chip({label} : ChipProps) {
  return (
    <div className="h-[36] rounded-[19px] border border-primary-600 w-max px-4 flex items-center justify-center flex-row">
      <Typography className="text-primary-600">
        {label}
      </Typography>
    </div>
  );
}
