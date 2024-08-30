import { FC } from "react";
import styles from "./Comments.module.css";
import { Comment } from "../../types";

type CommentsProps = {
  comments: Comment[];
};

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <div className={styles.commentsContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentItem}>
          <div className={styles.avatar}>{comment.name.charAt(0)}</div>
          <div className={styles.commentContent}>
            <div className={styles.commentHeader}>
              <div className={styles.commentInfo}>
                <p className={styles.commentName}>{comment.name}</p>
              </div>
            </div>
            <div className={styles.commentBody}>
              <p>{comment.body}</p>
            </div>
            <a href={`mailto:${comment.email}`} className={styles.commentEmail}>
              Reply by E-mail
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
