import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "@/routes";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
