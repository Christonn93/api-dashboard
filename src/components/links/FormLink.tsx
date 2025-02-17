import { Anchor, Checkbox, Group } from "@mantine/core";

type FormLinkProps = {
 text: string;
 buttonToggle?: () => void;
};

export const FormLink = ({ buttonToggle, text }: FormLinkProps) => {
 return (
  <Group justify="space-between" mt="lg">
   <Checkbox label="Remember me" />
   <Anchor component="button" size="sm" onClick={buttonToggle}>
    {text}
   </Anchor>
  </Group>
 );
};
