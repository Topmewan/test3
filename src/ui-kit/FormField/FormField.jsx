import styles from "./FormField.module.scss";
export const FormField = ({
  name,
  register,
  type,
  error,
  placeholder,
  className,
}) => {
  return (
    <div className={`${styles.formfield} ${className}`}>
      <>
        <input
          className={`${styles.input}`}
          name={name}
          {...(register ? register(name) : register)}
          type={type}
          placeholder={placeholder}
        />
      </>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};
