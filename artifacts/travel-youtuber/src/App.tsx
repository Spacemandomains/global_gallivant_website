import { useState, useEffect } from "react";
import LandingPage from "@/components/LandingPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import RentalsPage from "@/pages/RentalsPage";

function getRoute() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path.endsWith("/privacy")) return "privacy";
  if (path.endsWith("/terms")) return "terms";
  if (path.endsWith("/rentals")) return "rentals";
  if (path === "/" || path === "") return "home";
  return "404";
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handlePop = () => setRoute(getRoute());
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  if (route === "privacy") return <PrivacyPage />;
  if (route === "terms") return <TermsPage />;
  if (route === "rentals") return <RentalsPage />;
  if (route === "404") return <NotFoundPage />;
  return <LandingPage />;
}
