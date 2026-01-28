import { Application as ClockApp } from "@/applications/Clock";
import { Application as CalendarApp } from "@/applications/Calendar";
import { Application as ContactsApp } from "@/applications/Contacts";
import { Application as MailApp } from "@/applications/Mail";
import { Application as CalculatorApp } from "@/applications/Calculator";
import { Application as TelegramApp } from "@/applications/Telegram";
import styles from "./AppsContainer.module.css";

export const AppsContainer = () => {
  const { icon: ClockIcon } = ClockApp({ pinned: false });
  const { icon: CalendarIcon } = CalendarApp({ pinned: false });
  const { icon: ContactsIcon } = ContactsApp({ pinned: false });
  const { icon: MailIcon } = MailApp({ pinned: false });
  const { icon: CalculatorIcon } = CalculatorApp({ pinned: false });
  const { icon: TelegramIcon } = TelegramApp({ pinned: false });

  return (
    <>
      <div className={styles.appsContainer}>
        {ClockIcon}
        {CalendarIcon}
        {ContactsIcon}
        {MailIcon}
        {CalculatorIcon}
        {TelegramIcon}
      </div>
    </>
  );
};
