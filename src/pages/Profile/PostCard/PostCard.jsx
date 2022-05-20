import styles from "./PostCard.module.scss";
import { Typography } from "../../../ui-kit";
import { postContentPreview } from "../../../utils/helpers/string.helpers";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/posts/${post?.id}`)}>
      <div className={styles.top}>
        <Typography
          className={styles.title}
          text={postContentPreview(post?.title, 30)}
          variant="subtitle"
        />
        <span>12.01.22</span>
      </div>
      <p className={styles.body}>{postContentPreview(post?.body, 60)}</p>
    </div>
  );
};
