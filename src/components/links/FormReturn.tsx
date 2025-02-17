import { Anchor, Box, Center } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "@/theme/globalModules/Form.module.css";

export const FormReturn = ({ text }: { text: string }) => {
 return (
  <Anchor c="dimmed" size="sm" className={classes.control}>
   <Center inline>
    <IconArrowLeft size={12} stroke={1.5} />
    <Box ml={5}>{text}</Box>
   </Center>
  </Anchor>
 );
};
