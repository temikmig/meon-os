import clsx from "clsx";

import { Application as PhoneApp } from "@/applications/Phone";
import { Application as BrowserApp } from "@/applications/Browser";
import { Application as MessagesApp } from "@/applications/Messages";
import { Application as SettingsApp } from "@/applications/Settings";

import styles from "./PinnedContainer.module.css";

export const PinnedContainer = () => {
  const { icon: PhoneIcon } = PhoneApp({ pinned: true });
  const { icon: BrowserIcon } = BrowserApp({ pinned: true });
  const { icon: MessagesIcon } = MessagesApp({ pinned: true });
  const { icon: SettingsIcon } = SettingsApp({ pinned: true });

  return (
    <div className={clsx(styles.pinnedContainer, "liquid-glass")}>
      {PhoneIcon}
      {MessagesIcon}
      {BrowserIcon}
      {SettingsIcon}
    </div>
  );
};
