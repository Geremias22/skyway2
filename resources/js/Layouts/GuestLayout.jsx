import AppNavbar from "@/Components/layout/AppNavbar";
import Footer from "@/Components/layout/Footer";

export default function GuestLayout({ children }) {
  return (
    <div className="sky-root">
      <AppNavbar variant="guest" />
      <main className="sky-root-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
