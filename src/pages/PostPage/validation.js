import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string().required("Укажите имя"),
  email: Yup.string()
    .required("Укажите E-mail")
    .email("Некоректно указан E-mail"),
  body: Yup.string().required("Укажите комментарий"),
});
