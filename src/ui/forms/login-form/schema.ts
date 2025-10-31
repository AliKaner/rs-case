import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  userName: Yup.string().required("User name is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});
