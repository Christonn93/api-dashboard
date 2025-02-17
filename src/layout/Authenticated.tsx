import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const Authenticated = () => {
 return (
  <Box
   style={{
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
   }}
  >
   <Header />
   <main className="container" style={{ flex: 1 }}>
    <Outlet />
   </main>
   <Footer />
  </Box>
 );
};
