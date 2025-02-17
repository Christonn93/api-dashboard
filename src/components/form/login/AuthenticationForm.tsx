import { useState } from "react";
import { FormLink } from "@/components/links/FormLink";
import { Button, Paper, PasswordInput, TextInput } from "@mantine/core";
import { useLoginUser } from "@/hooks/queryHooks/useLoginUser";

type AuthenticationFormProps = {
 onToggleForm: () => void;
};

export const AuthenticationForm = ({ onToggleForm }: AuthenticationFormProps) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const loginMutation = useLoginUser();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  loginMutation.mutate({ email, password });
 };

 return (
  <Paper withBorder shadow="md" p={30} mt={30} radius="md">
   <form onSubmit={handleSubmit}>
    <TextInput label="Email" placeholder="you@mantine.dev" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <PasswordInput label="Password" placeholder="Your password" required mt="md" value={password} onChange={(e) => setPassword(e.target.value)} />
    <FormLink text="Forgot your password?" buttonToggle={onToggleForm} />
    <Button fullWidth mt="xl" type="submit">
     Sign in
    </Button>
    {loginMutation.isError && <p style={{ color: "red" }}>{(loginMutation.error as Error)?.message}</p>}
   </form>
  </Paper>
 );
};
