import AppNavbar from "@/Components/AppNavbar";
import Footer from "@/Components/Footer";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AppNavbar variant="guest" />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}