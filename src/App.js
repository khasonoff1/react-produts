import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Loading from "./components/shares/Loading";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const SinglePage = lazy(() => import("./components/pages/SinglePage"));
const JeweleryPage = lazy(() => import("./components/pages/JeweleryPage"));
const Electronics = lazy(() => import("./components/pages/Electronics"));
const MensClothing = lazy(() => import("./components/pages/MensClothing"));
const WomensClothing = lazy(() => import("./components/pages/WomensClothing"));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="jewelery" element={<JeweleryPage />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="mensClothing" element={<MensClothing />} />
              <Route path="womensClothing" element={<WomensClothing />} />
              <Route path="/:product" element={<SinglePage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
