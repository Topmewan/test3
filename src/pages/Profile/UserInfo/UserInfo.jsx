import styles from "./UserInfo.module.scss";
import { Typography, IButton } from "./../../../ui-kit";

export const UserInfo = ({ user }) => {
  return (
    <section className={styles.info}>
      <div className={styles.first}>
        <div className={styles.container}>
          <div className={styles.top}>
            <Typography text={user?.name} variant="title" />
          </div>
        </div>
      </div>
      <div className={styles.first}>
        <div className={styles.container}>
          <div className={styles.bottom}>
            <ul>
              <li>{user?.address?.city}</li>
              <li>{user?.email}</li>
              <li>{user?.phone}</li>
            </ul>
            <IButton variant="dark">Написать сообщение</IButton>
            <IButton variant="dark">Предложить сходить на концерт</IButton>
          </div>
        </div>
      </div>
    </section>
  );
};
