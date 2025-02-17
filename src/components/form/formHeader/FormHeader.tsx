import { Anchor, Text, Title } from "@mantine/core";
import classes from "@/theme/globalModules/Form.module.css";

type FormHeaderProps = {
 formDefinition: "register" | "login" | "forgotPassword";
 onToggleForm: () => void;
};

export const FormHeader = ({ formDefinition, onToggleForm }: FormHeaderProps) => {
 return (
  <>
   {formDefinition === "register" && (
    <>
     <Title ta="center" className={classes.title}>
      Create an account
     </Title>
     <Text c="dimmed" size="sm" ta="center" mt={5}>
      Already have an account?{" "}
      <Anchor size="sm" component="button" onClick={onToggleForm}>
       Sign in
      </Anchor>
     </Text>
    </>
   )}

   {formDefinition === "login" && (
    <>
     <Title ta="center" className={classes.title}>
      Welcome back!
     </Title>
     <Text c="dimmed" size="sm" ta="center" mt={5}>
      Do not have an account yet?{" "}
      <Anchor size="sm" component="button" onClick={onToggleForm}>
       Create account
      </Anchor>
     </Text>
    </>
   )}

   {formDefinition === "forgotPassword" && (
    <>
     <Title ta="center" className={classes.title}>
      Forgot your password?
     </Title>
     <Text c="dimmed" fz="sm" ta="center">
      Enter your email to get a reset link
     </Text>
    </>
   )}
  </>
 );
};
