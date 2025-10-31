// src/ui/layouts/header/index.tsx

// Imports
import { cn } from "@/lib/utils";
import { HEADER_HEIGHT, HEADER_MAX_WIDTH } from "@/constants";

// Props
interface HeaderLayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Header Layout Component
export const HeaderLayout = ({
  children,
  className = "",
}: HeaderLayoutProps) => {
  // States
  // Effects
  // Others
  // Render
  return (
    <header className={cn("bg-gray-100", className)}>
      <div
        className="mx-auto w-full flex items-center"
        style={{ maxWidth: HEADER_MAX_WIDTH, height: HEADER_HEIGHT }}
      >
        {children}
      </div>
    </header>
  );
};

// Export
export default HeaderLayout;
