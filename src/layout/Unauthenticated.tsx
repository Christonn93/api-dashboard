import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { NotFound } from "@/pages";
import { Box } from "@mantine/core";

export const Unauthenticated = () => {
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
    <NotFound state={"noUser"} />
   </main>
   <Footer />
  </Box>
 );
};
