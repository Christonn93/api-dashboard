import { theme } from "@/theme/theme";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
 return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
