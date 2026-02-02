import { Application as ClockApp } from "@/applications/Clock";
import { Application as CalendarApp } from "@/applications/Calendar";
import { Application as ContactsApp } from "@/applications/Contacts";
import { Application as MailApp } from "@/applications/Mail";
import { Application as CalculatorApp } from "@/applications/Calculator";
import { Application as TelegramApp } from "@/applications/Telegram";
import { Application as MusicApp } from "@/applications/Music";
import { Application as CameraApp } from "@/applications/Camera";
import { Application as NotesApp } from "@/applications/Notes";
import { Application as PhotosApp } from "@/applications/Photos";

import styles from "./AppsContainer.module.css";

export const AppsContainer = () => {
  const { icon: ClockIcon } = ClockApp({ pinned: false });
  const { icon: CalendarIcon } = CalendarApp({ pinned: false });
  const { icon: ContactsIcon } = ContactsApp({ pinned: false });
  const { icon: MailIcon } = MailApp({ pinned: false });
  const { icon: CalculatorIcon } = CalculatorApp({ pinned: false });
  const { icon: TelegramIcon } = TelegramApp({ pinned: false });
  const { icon: MusicIcon } = MusicApp({ pinned: false });
  const { icon: CameraIcon } = CameraApp({ pinned: false });
  const { icon: NotesIcon } = NotesApp({ pinned: false });
  const { icon: PhotosIcon } = PhotosApp({ pinned: false });

  return (
    <>
      <div className={styles.appsContainer}>
        {ClockIcon}
        {CalendarIcon}
        {ContactsIcon}
        {PhotosIcon}
        {CalculatorIcon}
        {MailIcon}
        {MusicIcon}
        {CameraIcon}
        {NotesIcon}
        {TelegramIcon}
      </div>
    </>
  );
};
