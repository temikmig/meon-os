import { AppIcon } from "@/components/ui/AppIcon";
import { APP_TITLE } from "./data";
import type { FC } from "react";

interface IconProps {
  handleOpen: () => void;
  title: boolean;
}

export const Icon: FC<IconProps> = ({ handleOpen, title }) => {
  const svg = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48px"
        viewBox="0,0,256,256"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(10.66667,10.66667)">
            <circle cx="12" cy="12" r="12" fill="#039be5"></circle>
            <path
              d="M5.491,11.74l11.57,-4.461c0.537,-0.194 1.006,0.131 0.832,0.943l0.001,-0.001l-1.97,9.281c-0.146,0.658 -0.537,0.818 -1.084,0.508l-3,-2.211l-1.447,1.394c-0.16,0.16 -0.295,0.295 -0.605,0.295l0.213,-3.053l5.56,-5.023c0.242,-0.213 -0.054,-0.333 -0.373,-0.121l-6.871,4.326l-2.962,-0.924c-0.643,-0.204 -0.657,-0.643 0.136,-0.953z"
              fill="#ffffff"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
  return (
    <AppIcon
      background={svg}
      title={title ? APP_TITLE : ""}
      color="#fff"
      handleOpen={handleOpen}
    />
  );
};
