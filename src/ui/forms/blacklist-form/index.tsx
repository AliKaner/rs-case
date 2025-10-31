"use client";

import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import { Label } from "@/ui/components/label";
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
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  // Update form when initialValues change
  useEffect(() => {
    formik.setValues(initialValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  return (
    <div className="w-full max-w-xl mx-auto space-y-6 bg-white/50 border border-gray-200 p-4 shadow-md rounded-md">
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

        <div className="space-y-2">
          <Label htmlFor="Adi">First Name</Label>
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
            <div className="text-sm text-red-500">First name is required</div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="Soy">Last Name</Label>
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
            <div className="text-sm text-red-500">Last name is required</div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="Aciklama">Description</Label>
          <Input
            id="Aciklama"
            name="Aciklama"
            type="text"
            placeholder="Enter description"
            value={formik.values.Aciklama}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.Aciklama && formik.touched.Aciklama
                ? "border-red-500"
                : ""
            }
          />
          {formik.errors.Aciklama && formik.touched.Aciklama && (
            <div className="text-sm text-red-500">Description is required</div>
          )}
        </div>

        <div className="space-y-2 flex flex-row justify-between gap-2">
          <Button
            type="submit"
            className="w-full"
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
                  Adi: "Test Name",
                  Soy: "Test Surname",
                  Aciklama: "Test Description",
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
