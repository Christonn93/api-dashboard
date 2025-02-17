import { Group, Paper, TextInput } from "@mantine/core";
import { FormButton } from "@/components/buttons/FormButton";
import { FormReturn } from "@/components/links/FormReturn";
import classes from "@/theme/globalModules/Form.module.css";

export function ForgotPassword() {
 return (
  <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
   <TextInput label="Your email" placeholder="me@mantine.dev" required />
   <Group justify="space-between" mt="lg" className={classes.controls}>
    <FormReturn text="Back to the login page" />
    <FormButton buttonText="Reset password" />
   </Group>
  </Paper>
 );
}
