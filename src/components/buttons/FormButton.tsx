import { Box, Button } from "@mantine/core";
import classes from "@/theme/globalModules/Form.module.css";

type FormButtonProps = {
 buttonText: string;
 handleClick?: () => void;
};

export const FormButton = ({ buttonText, handleClick }: FormButtonProps) => {
 return (
  <Box mt={15}>
   <Button className={classes.control} onClick={handleClick}>
    {buttonText}
   </Button>
  </Box>
 );
};
