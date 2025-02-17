import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { LandingPage, NotFound } from "./pages";

export default function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<BaseLayout />}>
     <Route index element={<LandingPage />} />
     <Route path="*" element={<NotFound />} />
    </Route>
   </Routes>
  </Router>
 );
}
