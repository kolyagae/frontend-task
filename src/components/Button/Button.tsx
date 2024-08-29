import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
