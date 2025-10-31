// src/ui/layouts/footer/index.tsx

// Imports
import { cn } from "@/lib/utils";
import { FOOTER_HEIGHT, FOOTER_MAX_WIDTH } from "@/constants";

// Props
interface FooterLayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Footer Layout Component
export const FooterLayout = ({
  children,
  className = "",
}: FooterLayoutProps) => {
  // States
  // Effects
  // Others
  // Render
  return (
    <footer className={cn("bg-gray-100", className)}>
      <div
        className="mx-auto w-full flex items-center"
        style={{ maxWidth: FOOTER_MAX_WIDTH, height: FOOTER_HEIGHT }}
      >
        {children}
      </div>
    </footer>
  );
};

// Export
export default FooterLayout;
