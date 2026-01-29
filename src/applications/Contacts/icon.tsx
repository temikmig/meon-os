import { AppIcon } from "@/components/ui/AppIcon";
import { APP_TITLE } from "./data";
import type { FC } from "react";
import { ContactsIcon } from "@/assets/icons";

interface IconProps {
  handleOpen: () => void;
  title: boolean;
}

export const Icon: FC<IconProps> = ({ handleOpen, title }) => {
  const svg = (
    <div style={{ width: "60%", height: "60%" }}>
      <ContactsIcon fontSize="36px" />
    </div>
  );
  return (
    <AppIcon
      background={svg}
      title={title ? APP_TITLE : ""}
      color="#3a78b3"
      handleOpen={handleOpen}
    />
  );
};
