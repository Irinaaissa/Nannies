import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";


const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NanniesPage  = lazy(() => import("../pages/NanniesPage/NanniesPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage/FavoritesPage"));
// import Loader from "../components/UI/Loader/Loader";

export default function AppRouter() {
  return (
    // <Suspense fallback={<Loader />}>
        <Suspense >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

