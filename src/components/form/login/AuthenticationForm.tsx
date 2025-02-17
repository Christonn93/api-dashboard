import { FormLink } from "@/components/links/FormLink";
import { Button, Paper, PasswordInput, TextInput } from "@mantine/core";
import { useLoginUser } from "@/hooks/queryHooks/useLoginUser";
import { useFormik } from "formik";
import * as Yup from "yup";

type AuthenticationFormProps = {
 onToggleForm: () => void;
};

export const AuthenticationForm = ({ onToggleForm }: AuthenticationFormProps) => {
 const loginMutation = useLoginUser();

 const formik = useFormik({
  initialValues: {
   email: "",
   password: "",
  },
  validationSchema: Yup.object({
   email: Yup.string().email("Invalid email format").required("Email is required"),
   password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  }),
  onSubmit: (values) => {
   loginMutation.mutate(values);
  },
 });

 return (
  <Paper withBorder shadow="md" p={30} mt={30} radius="md">
   <form onSubmit={formik.handleSubmit}>
    <TextInput label="Email" placeholder="you@mantine.dev" required {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email ? formik.errors.email : null} />
    <PasswordInput
     label="Password"
     placeholder="Your password"
     required
     mt="md"
     {...formik.getFieldProps("password")}
     error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
    />
    <FormLink text="Forgot your password?" buttonToggle={onToggleForm} />
    <Button fullWidth mt="xl" type="submit" disabled={loginMutation.isPending}>
     {loginMutation.isPending ? "Signing in..." : "Sign in"}
    </Button>
    {loginMutation.isError && <p style={{ color: "red" }}>{(loginMutation.error as Error)?.message}</p>}
   </form>
  </Paper>
 );
};
