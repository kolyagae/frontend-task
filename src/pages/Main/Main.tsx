import { useNavigate } from "react-router-dom";
import { useFetchPostsQuery } from "../../app/api/api";
import styles from "./Main.module.css";
import Loader from "../../components/Loader/Loader";

const Main = () => {
  const { data: posts, error, isLoading } = useFetchPostsQuery();
  const navigate = useNavigate();

  const openPostDetails = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading posts</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <ul className={styles.postList}>
      {posts.map((post) => (
        <li
          key={post.id}
          className={styles.postItem}
          onClick={() => openPostDetails(post.id)}
        >
          <h3 className={styles.postTitle}>{post.title}</h3>
          <hr />
          <div className={styles.postContent}>{post.body}</div>
        </li>
      ))}
    </ul>
  );
};

export default Main;
