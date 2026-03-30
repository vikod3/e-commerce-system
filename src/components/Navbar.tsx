import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/gradient-button";
import { User } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const navigationItems = [
  { label: "Weight Loss", href: "#weight-loss" },
  { label: "Strength", href: "#strength" },
  { label: "Anti-Aging", href: "#anti-aging" },
  { label: "Hair Growth", href: "#hair-growth" },
  { label: "Mood", href: "#mood" },
  { label: "More", href: "#more" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 text-xl font-semibold text-foreground">
            <img src={logoDark} alt="Brand" className="h-8 w-auto" />
          </a>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button size="default" className="hidden md:inline-flex">
              Get started
            </Button>
            <GradientButton className="px-5 py-3">
              <User className="w-4 h-4" />
              Login
            </GradientButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
