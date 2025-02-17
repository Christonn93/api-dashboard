import { useState } from "react";
import { AuthenticationForm, ForgotPassword, RegisterNewUser } from "@/components/form";
import { FormHeader } from "@/components/form/formHeader/FormHeader";
import { Container } from "@mantine/core";

export const LandingPage = () => {
 const [formState, setFormState] = useState<"login" | "register" | "forgotPassword">("register");

 const toggleForm = () => {
  if (formState === "login") {
   setFormState("register");
  } else if (formState === "register") {
   setFormState("login");
  }
 };

 const handleForgotPasswordClick = () => {
  setFormState("forgotPassword");
 };

 return (
  <Container size={420} my={40}>
   <FormHeader formDefinition={formState} onToggleForm={toggleForm} />

   {formState === "login" && <AuthenticationForm onToggleForm={handleForgotPasswordClick} />}
   {formState === "register" && <RegisterNewUser />}
   {formState === "forgotPassword" && <ForgotPassword />}
  </Container>
 );
};
