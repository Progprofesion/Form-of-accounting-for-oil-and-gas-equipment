import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import FormPage from "../pages/FormPage";
// import ReportPage from "../pages/ReportPage";
import "./app.scss";

const ReportPage = lazy(() => import("../pages/ReportPage"));

const app = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default app;
