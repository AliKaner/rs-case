import { BlacklistAddRequest } from "@/api/types";

export const BlacklistInitialValues: Omit<BlacklistAddRequest, "db_Id"> = {
  Id: 0,
  Adi: "",
  Soy: "",
  Aciklama: "",
  Kara: "Kara",
  Tcno: null,
  Kimlik_no: null,
  Dogum_tarihi: null,
  Sistem_tarihi: null,
  Sistem_grubu: null,
  Otel_kodu: null,
  Ulke_xml: null,
  Kulanici: null,
  Acenta: null,
  "Xml Kodu": null,
  "ULke Adı": null,
};

export default BlacklistInitialValues;
