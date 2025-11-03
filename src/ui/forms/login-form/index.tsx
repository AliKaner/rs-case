"use client";

import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import { Label } from "@/ui/components/label";
import { Loader2 } from "lucide-react";
import { useFormik } from "formik";
import LoginFormInitialValues from "./initial-values";
import { loginSchema } from "./schema";
import { LoginRequest } from "@/api/types";
import { useUser } from "@/contexts/UserContext";

export const LoginForm = () => {
  const { login, isLoginLoading } = useUser();

  const formik = useFormik<LoginRequest>({
    initialValues: LoginFormInitialValues,
    validationSchema: loginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting }) => {
      login(values);
      setSubmitting(false);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto space-y-6 bg-white/50 border border-gray-200 p-4 shadow-md rounded-md">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500">
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="userName">User Name</Label>
          <Input
            id="userName"
            name="userName"
            type="text"
            placeholder="Enter your user name"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.userName && formik.touched.userName
                ? "border-red-500"
                : ""
            }
          />
          {formik.errors.userName && formik.touched.userName && (
            <div className="text-sm text-red-500">{formik.errors.userName}</div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.password && formik.touched.password
                ? "border-red-500"
                : ""
            }
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-sm text-red-500">{formik.errors.password}</div>
          )}
        </div>

        <div className="space-y-2 flex flex-row justify-between gap-2">
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={formik.isSubmitting || isLoginLoading}
          >
            {isLoginLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          <Button
            type="button"
            className="w-1/4 bg-blue-500 text-white cursor-pointer"
            disabled={formik.isSubmitting || isLoginLoading}
            onClick={() => {
              formik.setValues({
                userName: "yunus@test.com",
                password: "yunus",
              });
            }}
          >
            Fill
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
