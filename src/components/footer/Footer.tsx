import { Container } from "@mantine/core";
import classes from "./Footer.module.css";

export const Footer = () => {
 return (
  <div className={classes.footer}>
   <Container className={classes.inner}></Container>
  </div>
 );
};
