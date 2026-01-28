import { useAppContext } from "@/context/useAppContext";
import { App } from "./app";
import { Icon } from "./icon";

interface ApplicationProps {
  pinned?: boolean;
}

export const Application = ({ pinned = false }: ApplicationProps) => {
  const { setCurrentApp } = useAppContext();

  const icon = (
    <Icon
      handleOpen={() => {
        setCurrentApp(<App />);
      }}
      title={!pinned}
    />
  );
  const application = <App />;
  return { icon, application };
};
