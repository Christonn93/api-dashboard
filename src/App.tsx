import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { LandingPage, NotFound } from "./pages";
import { UserPage } from "./pages/UserPage";

export default function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<BaseLayout />}>
     <Route index element={<LandingPage />} />
     <Route path="/user" element={<UserPage />} />
     <Route path="*" element={<NotFound />} />
    </Route>
   </Routes>
  </Router>
 );
}
