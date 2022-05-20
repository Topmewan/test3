import { Typography, IButton } from "./../../../ui-kit";
import { Link } from "react-router-dom";
import styles from "./UserCard.module.scss";

export const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <Typography text={user?.name} variant="subtitle" />
      <span>{user?.address?.city}</span>
      <Link to={`/profile/${user?.id}`}>
        <IButton className={styles.button} variant="dark">
          Смотреть профиль
        </IButton>
      </Link>
    </div>
  );
};
