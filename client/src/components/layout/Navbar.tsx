import Logo from "@/components/common/Logo";
import Navigation from "@/components/layout/Navigation";
import NavbarActions from "@/components/layout/NavbarActions";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <Navigation className="hidden lg:flex" />

        <NavbarActions />
      </div>
    </header>
  );
}