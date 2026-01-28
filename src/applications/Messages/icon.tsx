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
      >
        <path
          d="M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416a414.421333 414.421333 0 0 1-182.016-41.813333c-56.661333 32.128-138.538667 45.269333-245.930667 41.045333a32 32 0 0 1-24.106666-51.498667c47.061333-61.141333 76.373333-115.2 88.405333-161.578666A414.250667 414.250667 0 0 1 96 512c0-229.76 186.24-416 416-416z m0 64a352 352 0 0 0-302.208 532.608 32 32 0 0 1 3.925333 22.826667c-9.216 45.525333-31.445333 94.805333-66.474666 148.138666 74.154667-2.517333 128.512-16.341333 162.816-40.405333a32 32 0 0 1 33.706666-1.877333A352 352 0 1 0 512 160z m128 405.333333a32 32 0 1 1 0 64H341.333333a32 32 0 1 1 0-64z m-85.333333-170.666666a32 32 0 1 1 0 64H341.333333a32 32 0 1 1 0-64z"
          fill="#fff"
        />
      </svg>
    </div>
  );
  return (
    <AppIcon
      background={svg}
      title={title ? APP_TITLE : ""}
      color="#66c891"
      handleOpen={handleOpen}
    />
  );
};
