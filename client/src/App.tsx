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
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));

// User Pages
const UserPagesLayout = lazy(
  () => import("@/components/layouts/UserPagesLayout")
);
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const SupportersPage = lazy(() => import("@/pages/Supporters"));
const PayoutPage = lazy(() => import("@/pages/Payout"));
const OnboardingPage = lazy(() => import("@/pages/Onboarding"));

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
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/complete-setup" element={<OnboardingPage />} />
          </Route>

          {/* User Routes */}
          <Route element={<UserPagesLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/supporters" element={<SupportersPage />} />
            <Route path="/payout" element={<PayoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
};
export default App;
