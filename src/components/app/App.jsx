import { Routes, Route, HashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import FormPage from "../pages/FormPage";
import "./app.scss";

const ReportPage = lazy(() => import("../pages/ReportPage"));

const app = () => {
  return (
    <HashRouter>
      <main className="app">
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </Suspense>
      </main>
    </HashRouter>
  );
};

export default app;
