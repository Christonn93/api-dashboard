import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./Unauthenticated.module.css";

export const Unauthenticated = () => {
 return (
  <div className={classes.root}>
   <Container>
    <Title className={classes.title}>Something bad just happened...</Title>
    <Text size="lg" ta="center" className={classes.description}>
     You are not logged in...
    </Text>
    <Group justify="center">
     <Button variant="white" size="md">
      Refresh the page
     </Button>
    </Group>
   </Container>
  </div>
 );
};
