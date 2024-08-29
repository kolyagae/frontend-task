import { useParams } from "react-router-dom";
import { useFetchPostByIdQuery } from "../../app/api/api";
import styles from "./PostDetail.module.css";
import Loader from "../../components/Loader/Loader";

const PostDetail = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useFetchPostByIdQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading post</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className={styles.fullPostCard}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <hr />
      <p className={styles.postBody}>{post.body}</p>
    </div>
  );
};

export default PostDetail;
