import { useLoginUser } from "@/hooks/queryHooks/useLoginUser";
import { Box, Button, Container, Paper, PasswordInput, TextInput } from "@mantine/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export const LandingPage = () => {
 const formInitialValues = {
  email: "",
  password: "",
 };

 const formikValidation = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
 });

 const { mutate, isLoading, isError, error } = useLoginUser();

 const handleFormSubmit = (values: typeof formInitialValues) => {
  mutate(values);
 };

 return (
  <Container size={420} my={40}>
   <Paper withBorder shadow="md" p={30} mt={30} radius="md">
    <Formik initialValues={formInitialValues} validationSchema={formikValidation} onSubmit={handleFormSubmit}>
     {({ handleSubmit, values, errors, touched, handleChange }) => (
      <Box component={Form} onSubmit={handleSubmit}>
       <TextInput label="Email" placeholder="you@mantine.dev" value={values.email} onChange={handleChange} name="email" required error={touched.email && errors.email} />
       <PasswordInput label="Password" placeholder="Your password" value={values.password} onChange={handleChange} name="password" required error={touched.password && errors.password} mt="md" />
       <Button fullWidth mt="xl" type="submit" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in"}
       </Button>
       {isError && <p style={{ color: "red" }}>{String(error)}</p>}
      </Box>
     )}
    </Formik>
   </Paper>
  </Container>
 );
};
