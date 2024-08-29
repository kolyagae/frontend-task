import { useEffect, useState } from "react";
import { hideToast } from "../../app/slices/toastSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Toast.module.css";

const Toast = () => {
  const dispatch = useAppDispatch();
  const { message, show, duration, type } = useAppSelector(
    (state) => state.toast
  );
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (show) {
      setAnimationClass(styles.toastShow);
      const timer = setTimeout(() => {
        setAnimationClass(styles.toastHide);
        setTimeout(() => dispatch(hideToast()), 500);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, dispatch]);

  if (!show && animationClass === "") return null;

  const toastTypeClass = type === "success" ? styles.success : styles.error;

  return (
    <div className={`${styles.toast} ${animationClass} ${toastTypeClass}`}>
      {message}
    </div>
  );
};

export default Toast;
