import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AdminDashboard from "@/features/dashboard/routes/dashboard-page";
import DashboardPage from "@/features/layout/dashboard-layout";
import BlogPageRoutes from "@/features/blog/routes/index";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DashboardPage />}>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/blog/*" element={<BlogPageRoutes />} />

    </Route>
  )
);
