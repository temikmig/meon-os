import { AppIcon } from "@/components/ui/AppIcon";
import { APP_TITLE } from "./data";
import type { FC } from "react";

interface IconProps {
  handleOpen: () => void;
  title: boolean;
}

export const Icon: FC<IconProps> = ({ handleOpen, title }) => {
  const svg = (
    <div style={{ width: "60%", height: "60%" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        fill="#fff"
      >
        <path d="M974.507 201.387A85.333 85.333 0 0 0 896 149.333H128a85.333 85.333 0 0 0-85.333 85.334v554.666A85.333 85.333 0 0 0 128 874.667h768a85.333 85.333 0 0 0 85.333-85.334V234.667a85.333 85.333 0 0 0-6.826-33.28z m-102.4 11.946l-352.64 352.64a10.667 10.667 0 0 1-15.147 0l-352.427-352.64z m45.226 576A21.333 21.333 0 0 1 896 810.667H128a21.333 21.333 0 0 1-21.333-21.334V258.56l352.64 352.64a74.667 74.667 0 0 0 105.6 0l352.426-352.64z" />
      </svg>
    </div>
  );
  return (
    <AppIcon
      background={svg}
      title={title ? APP_TITLE : ""}
      color="#8f73b1"
      handleOpen={handleOpen}
    />
  );
};
