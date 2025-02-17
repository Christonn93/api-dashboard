import { Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

export const Header = () => {
 const [opened, { toggle }] = useDisclosure(false);

 return (
  <header className={classes.header}>
   <div className={classes.inner}>
    <Group>
     <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
    </Group>
   </div>
  </header>
 );
};
