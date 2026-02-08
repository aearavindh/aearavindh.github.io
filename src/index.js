import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./routes/Home";
import Languages from "./routes/Languages";
import Education from "./routes/Education";
import Employment from "./routes/Employment";
import Projects from "./routes/Projects";
import Notes from "./routes/Notes"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="languages" element={<Languages />} />
          <Route path="education" element={<Education />} />
          <Route path="employment" element={<Employment />} />
          <Route path="projects" element={<Projects />} />
          <Route path="notes" element={<Notes />} />
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  display: "grid",
                  placeItems: "center",
                  height: "80vh",
                }}
              >
                <p>Ohh! Nothing to show here...</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
