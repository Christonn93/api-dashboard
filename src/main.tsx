import { TanstackQueryProvider, ThemeProvider } from "./provider";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Style imports
import "react-toastify/dist/ReactToastify.css";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
 <TanstackQueryProvider>
  <ThemeProvider>
   <App />
  </ThemeProvider>
 </TanstackQueryProvider>
);
