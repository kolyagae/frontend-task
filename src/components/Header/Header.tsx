import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { clearUser } from "../../app/slices/userSlice";
import styles from "./Header.module.css";
import { showToast } from "../../app/slices/toastSlice";
import Button from "../Button/Button";

const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(clearUser());
    dispatch(showToast({ message: "Session ended" }));
  };
  return (
    <>
      <header className={styles.header}>
        <h1>StoryWeaver</h1>
        <nav>
          {user ? (
            <Button onClick={logOut}>Log Out</Button>
          ) : (
            <Link to="login">Sign In</Link>
          )}
        </nav>
      </header>
      {pathname !== "/" && <Link to="/">{"<"} back</Link>}
    </>
  );
};

export default Header;
