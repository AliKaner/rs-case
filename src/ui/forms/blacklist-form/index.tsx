"use client";

import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import { Label } from "@/ui/components/label";
import { Textarea } from "@/ui/components/textarea";
import { Loader2 } from "lucide-react";
import { useFormik } from "formik";
import { blacklistSchema } from "./schema";
import { BlacklistAddRequest } from "@/api/types";
import { BlacklistInitialValues } from "./initial-values";
import { useEffect } from "react";

interface BlacklistFormProps {
  initialValues: Omit<BlacklistAddRequest, "db_Id">;
  isEditMode: boolean;
  isSubmitting: boolean;
  showId?: boolean;
  onSubmit: (values: Omit<BlacklistAddRequest, "db_Id">) => void;
}

export const BlacklistForm = ({
  initialValues,
  isEditMode,
  isSubmitting,
  showId = false,
  onSubmit,
}: BlacklistFormProps) => {
  const formik = useFormik<Omit<BlacklistAddRequest, "db_Id">>({
    initialValues,
    validationSchema: blacklistSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      await onSubmit(values);
    },
  });

  // Update form when initialValues change
  useEffect(() => {
    formik.setValues(initialValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 bg-white/50 border border-gray-200 p-6 shadow-md rounded-md">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">
          {isEditMode ? "Edit Blacklist" : "Add to Blacklist"}
        </h1>
        <p className="text-gray-500">
          {isEditMode
            ? "Update blacklist information"
            : "Enter blacklist details"}
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {showId && (
          <div className="space-y-2">
            <Label htmlFor="Id">ID</Label>
            <Input
              id="Id"
              name="Id"
              type="number"
              placeholder="ID"
              value={formik.values.Id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={isEditMode}
              readOnly={isEditMode}
              className={
                formik.errors.Id && formik.touched.Id
                  ? "border-red-500"
                  : isEditMode
                  ? "bg-gray-100"
                  : ""
              }
            />
            {formik.errors.Id && formik.touched.Id && (
              <div className="text-sm text-red-500">{formik.errors.Id}</div>
            )}
            {isEditMode && (
              <p className="text-xs text-gray-500">
                ID cannot be changed when editing
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="Adi">Ad (First Name) *</Label>
            <Input
              id="Adi"
              name="Adi"
              type="text"
              placeholder="Enter name"
              value={formik.values.Adi}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Adi && formik.touched.Adi ? "border-red-500" : ""
              }
            />
            {formik.errors.Adi && formik.touched.Adi && (
              <div className="text-sm text-red-500">{formik.errors.Adi}</div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="Soy">Soyad (Last Name) *</Label>
            <Input
              id="Soy"
              name="Soy"
              type="text"
              placeholder="Enter surname"
              value={formik.values.Soy}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Soy && formik.touched.Soy ? "border-red-500" : ""
              }
            />
            {formik.errors.Soy && formik.touched.Soy && (
              <div className="text-sm text-red-500">{formik.errors.Soy}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="Tcno">TC Kimlik No</Label>
            <Input
              id="Tcno"
              name="Tcno"
              type="text"
              placeholder="11 haneli TC Kimlik No"
              value={formik.values.Tcno || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Tcno && formik.touched.Tcno
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors.Tcno && formik.touched.Tcno && (
              <div className="text-sm text-red-500">{formik.errors.Tcno}</div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="Kimlik_no">Kimlik No</Label>
            <Input
              id="Kimlik_no"
              name="Kimlik_no"
              type="text"
              placeholder="Kimlik No"
              value={formik.values.Kimlik_no || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Kimlik_no && formik.touched.Kimlik_no
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors.Kimlik_no && formik.touched.Kimlik_no && (
              <div className="text-sm text-red-500">
                {formik.errors.Kimlik_no}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="Dogum_tarihi">Doğum Tarihi</Label>
            <Input
              id="Dogum_tarihi"
              name="Dogum_tarihi"
              type="text"
              placeholder="YYYY-MM-DD"
              value={formik.values.Dogum_tarihi || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Dogum_tarihi && formik.touched.Dogum_tarihi
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors.Dogum_tarihi && formik.touched.Dogum_tarihi && (
              <div className="text-sm text-red-500">
                {formik.errors.Dogum_tarihi}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="Sistem_tarihi">Sistem Tarihi</Label>
            <Input
              id="Sistem_tarihi"
              name="Sistem_tarihi"
              type="text"
              placeholder="YYYY-MM-DD"
              value={formik.values.Sistem_tarihi || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Sistem_tarihi && formik.touched.Sistem_tarihi
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors.Sistem_tarihi && formik.touched.Sistem_tarihi && (
              <div className="text-sm text-red-500">
                {formik.errors.Sistem_tarihi}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="Otel_kodu">Otel Kodu</Label>
            <Input
              id="Otel_kodu"
              name="Otel_kodu"
              type="number"
              placeholder="Otel kodu"
              value={formik.values.Otel_kodu || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Otel_kodu && formik.touched.Otel_kodu
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors.Otel_kodu && formik.touched.Otel_kodu && (
              <div className="text-sm text-red-500">
                {formik.errors.Otel_kodu}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="Sistem_grubu">Sistem Grubu</Label>
            <Input
              id="Sistem_grubu"
              name="Sistem_grubu"
              type="text"
              placeholder="Sistem grubu"
              value={formik.values.Sistem_grubu || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Sistem_grubu && formik.touched.Sistem_grubu
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors.Sistem_grubu && formik.touched.Sistem_grubu && (
              <div className="text-sm text-red-500">
                {formik.errors.Sistem_grubu}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="Ulke_xml">Ülke XML</Label>
            <Input
              id="Ulke_xml"
              name="Ulke_xml"
              type="text"
              placeholder="Ülke XML"
              value={formik.values.Ulke_xml || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Ulke_xml && formik.touched.Ulke_xml
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors.Ulke_xml && formik.touched.Ulke_xml && (
              <div className="text-sm text-red-500">
                {formik.errors.Ulke_xml}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="Xml Kodu">XML Kodu</Label>
            <Input
              id="Xml Kodu"
              name="Xml Kodu"
              type="text"
              placeholder="XML Kodu"
              value={formik.values["Xml Kodu"] || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors["Xml Kodu"] && formik.touched["Xml Kodu"]
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors["Xml Kodu"] && formik.touched["Xml Kodu"] && (
              <div className="text-sm text-red-500">
                {formik.errors["Xml Kodu"]}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ULke Adı">Ülke Adı</Label>
            <Input
              id="ULke Adı"
              name="ULke Adı"
              type="text"
              placeholder="Ülke adı"
              value={formik.values["ULke Adı"] || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors["ULke Adı"] && formik.touched["ULke Adı"]
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors["ULke Adı"] && formik.touched["ULke Adı"] && (
              <div className="text-sm text-red-500">
                {formik.errors["ULke Adı"]}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="Kulanici">Kullanıcı</Label>
            <Input
              id="Kulanici"
              name="Kulanici"
              type="text"
              placeholder="Kullanıcı"
              value={formik.values.Kulanici || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Kulanici && formik.touched.Kulanici
                  ? "border-red-500"
                  : ""
              }
            />
            {formik.errors.Kulanici && formik.touched.Kulanici && (
              <div className="text-sm text-red-500">
                {formik.errors.Kulanici}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="Acenta">Acenta</Label>
          <Input
            id="Acenta"
            name="Acenta"
            type="text"
            placeholder="Acenta"
            value={formik.values.Acenta || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.Acenta && formik.touched.Acenta
                ? "border-red-500"
                : ""
            }
          />
          {formik.errors.Acenta && formik.touched.Acenta && (
            <div className="text-sm text-red-500">{formik.errors.Acenta}</div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="Aciklama">Açıklama *</Label>
          <Textarea
            id="Aciklama"
            name="Aciklama"
            placeholder="Açıklama"
            value={formik.values.Aciklama}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={3}
            className={
              formik.errors.Aciklama && formik.touched.Aciklama
                ? "border-red-500"
                : ""
            }
          />
          {formik.errors.Aciklama && formik.touched.Aciklama && (
            <div className="text-sm text-red-500">{formik.errors.Aciklama}</div>
          )}
        </div>

        <div className="flex flex-row justify-between gap-2 pt-4">
          <Button
            type="submit"
            className="flex-1"
            disabled={formik.isSubmitting || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEditMode ? "Updating..." : "Adding..."}
              </>
            ) : isEditMode ? (
              "Update"
            ) : (
              "Add"
            )}
          </Button>
          {!isEditMode && (
            <Button
              type="button"
              className="w-1/4 bg-blue-500 text-white"
              disabled={formik.isSubmitting || isSubmitting}
              onClick={() => {
                formik.setValues({
                  Id: 0,
                  Adi: "",
                  Soy: "",
                  Aciklama: "",
                  Kara: "Kara",
                  Tcno: "",
                  Kimlik_no: "",
                  Dogum_tarihi: "1995-05-20",
                  Sistem_tarihi: "2025-10-31",
                  Sistem_grubu: "Rezervasyon Kontrol",
                  Otel_kodu: "987",
                  Ulke_xml: "TR",
                  Kulanici: "rmos_admin",
                  Acenta: "Test Acenta LTD",
                  "Xml Kodu": "TRXML01",
                  "ULke Adı": "Türkiye",
                });
              }}
            >
              Fill
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BlacklistForm;
