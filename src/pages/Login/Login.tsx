import { useState, useEffect, MouseEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../app/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../app/slices/toastSlice";
import styles from "./Login.module.css";
import Button from "../../components/Button/Button";
import { useLazyFetchUserByUserNameQuery } from "../../app/api/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [fetchUser, { data: users, error, isLoading, isFetching }] =
    useLazyFetchUserByUserNameQuery();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchUser(username);
  };

  useEffect(() => {
    if (isFetching || isLoading) return;

    if (error) {
      dispatch(showToast({ message: "Error occurred", type: "error" }));
    } else if (users && users.length === 0) {
      dispatch(showToast({ message: "User not found", type: "error" }));
    } else if (users && users.length > 0) {
      dispatch(setUser(users[0]));
      navigate("/");
    }
  }, [users, error, isLoading, isFetching, dispatch, navigate]);

  return (
    <div className={styles.container}>
      <h2>Sign In</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className={styles.signInInput}
      />
      <Button onClick={handleSubmit} disabled={isLoading || isFetching}>
        {isLoading || isFetching ? "Loading..." : "Submit"}
      </Button>
    </div>
  );
};

export default Login;
