import { BlacklistAddRequest } from "@/api/types";

export const BlacklistInitialValues: Omit<BlacklistAddRequest, "db_Id"> = {
  Id: 0,
  Adi: "",
  Soy: "",
  Aciklama: "",
};

export default BlacklistInitialValues;
