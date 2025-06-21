import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import AddNewJob from "./pages/AddNewJob.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import Layout from "./Layout.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/add-job" element={<AddNewJob />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
