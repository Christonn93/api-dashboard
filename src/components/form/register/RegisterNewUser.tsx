import { Button, Checkbox, Group, Paper, PasswordInput, TextInput } from "@mantine/core";

export const RegisterNewUser = () => {
 return (
  <Paper withBorder shadow="md" p={30} mt={30} radius="md">
   <TextInput label="Email" placeholder="you@mantine.dev" required />
   <PasswordInput label="Password" placeholder="Your password" required mt="md" />
   <PasswordInput label="Confirm Password" placeholder="Confirm your password" required mt="md" />

   <Group justify="space-between" mt="lg">
    <Checkbox label="I agree to the Terms and Conditions" required />
   </Group>

   <Button fullWidth mt="xl">
    Register
   </Button>
  </Paper>
 );
};
