import { useParams } from "react-router-dom";
import {
  useFetchCommentsByPostIdQuery,
  useFetchPostByIdQuery,
} from "../../app/api/api";
import styles from "./PostDetail.module.css";
import Loader from "../../components/Loader/Loader";
import Comments from "../../components/Comments/Comments";

const PostDetail = () => {
  const { id = "" } = useParams<{ id: string }>();
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = useFetchPostByIdQuery(id);

  const {
    data: comments,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useFetchCommentsByPostIdQuery(id);

  if (postIsLoading || commentsIsLoading) {
    return <Loader />;
  }

  if (postError || commentsError) {
    return <p>Loading error, try again later</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <div className={styles.fullPostCard}>
        <h2 className={styles.postTitle}>{post.title}</h2>

        <p className={styles.postBody}>{post.body}</p>
      </div>
      {comments && (
        <>
          <hr className={styles.divider} />
          <Comments comments={comments} />
        </>
      )}
    </>
  );
};

export default PostDetail;
