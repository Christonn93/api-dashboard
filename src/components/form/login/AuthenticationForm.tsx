import { FormButton } from "@/components/buttons/FormButton";
import { FormLink } from "@/components/links/FormLink";
import { Paper, PasswordInput, TextInput } from "@mantine/core";

type AuthenticationFormProps = {
 onToggleForm: () => void;
};

export const AuthenticationForm = ({ onToggleForm }: AuthenticationFormProps) => {
 return (
  <Paper withBorder shadow="md" p={30} mt={30} radius="md">
   <TextInput label="Email" placeholder="you@mantine.dev" required />
   <PasswordInput label="Password" placeholder="Your password" required mt="md" />
   <FormLink text="Forgot your password?" buttonToggle={onToggleForm} />
   <FormButton buttonText="Sign in" />
  </Paper>
 );
};
