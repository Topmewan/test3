import styles from "./Typography.module.scss";

export const Typography = ({ text, variant, className }) => {
  return (
    <h1
      className={`${styles.typography} ${variant === "title" && styles.title} ${
        variant === "subtitle" && styles.subtitle
      } ${className}`}
    >
      {text}
    </h1>
  );
};
