import * as Yup from "yup";

export const blacklistSchema = Yup.object().shape({
  Id: Yup.number().required("ID is required"),
  Adi: Yup.string().required("Adı is required"),
  Soy: Yup.string().required("Soy is required"),
  Aciklama: Yup.string().required("Açıklama is required"),
});
