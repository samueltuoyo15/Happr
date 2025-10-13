import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import LandingPage from "@/pages/LandingPage";

// Auth Pages
const AuthLayout = lazy(() =>
  import("@/features/auth").then(module => ({ default: module.Layout }))
);
const SignupPage = lazy(() => import("@/pages/SignUp"));
const SigninPage = lazy(() => import("@/pages/SignIn"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
};
export default App;
