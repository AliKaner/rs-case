import * as Yup from "yup";

export const blacklistSchema = Yup.object().shape({
  Id: Yup.number().required("ID is required"),
  Adi: Yup.string().required("Adı is required"),
  Soy: Yup.string().required("Soy is required"),
  Aciklama: Yup.string().required("Açıklama is required"),
  Kara: Yup.string().required("Kara is required"),
  Tcno: Yup.string()
    .test(
      "tc-validation",
      "TC Kimlik No 11 haneli olmalıdır",
      function (value) {
        if (!value || value.length === 0) return true; // Empty is OK
        return /^[0-9]{11}$/.test(value);
      }
    )
    .nullable(),
  Kimlik_no: Yup.string()
    .nullable()
    .max(50, "Kimlik No en fazla 50 karakter olabilir"),
  Dogum_tarihi: Yup.string()
    .test(
      "date-validation",
      "Doğum tarihi YYYY-MM-DD formatında olmalıdır",
      function (value) {
        if (!value || value.length === 0) return true; // Empty is OK
        return /^\d{4}-\d{2}-\d{2}$/.test(value);
      }
    )
    .nullable(),
  Sistem_tarihi: Yup.string()
    .test(
      "date-validation",
      "Sistem tarihi YYYY-MM-DD formatında olmalıdır",
      function (value) {
        if (!value || value.length === 0) return true; // Empty is OK
        return /^\d{4}-\d{2}-\d{2}$/.test(value);
      }
    )
    .nullable(),
  Sistem_grubu: Yup.string()
    .nullable()
    .max(100, "Sistem grubu en fazla 100 karakter olabilir"),
  Otel_kodu: Yup.string().nullable(),
  Ulke_xml: Yup.string()
    .nullable()
    .max(50, "Ülke XML en fazla 50 karakter olabilir"),
  Kulanici: Yup.string()
    .nullable()
    .max(100, "Kullanıcı en fazla 100 karakter olabilir"),
  Acenta: Yup.string()
    .nullable()
    .max(200, "Acenta en fazla 200 karakter olabilir"),
  "Xml Kodu": Yup.string()
    .nullable()
    .max(50, "XML Kodu en fazla 50 karakter olabilir"),
  "ULke Adı": Yup.string()
    .nullable()
    .max(100, "Ülke adı en fazla 100 karakter olabilir"),
});
