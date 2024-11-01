import { Typography } from "./typography";

export const Footer = () => {
  return (
    <div className="flex flex-col items-end">
      <Typography variant="caption">
        mardi au samedi 12h-15h/18h-21h30
      </Typography>
      <Typography variant="caption">dimanche 18h-21h30 </Typography>
    </div>
  );
};
