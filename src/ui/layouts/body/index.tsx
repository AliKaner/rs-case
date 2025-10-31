// src/ui/layouts/body/index.tsx

// Imports
import { cn } from "@/lib/utils";

// Props
interface BodyLayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Body Layout Component
export const BodyLayout = ({ children, className = "" }: BodyLayoutProps) => {
  // States
  // Effects
  // Others
  // Render
  return (
    <div className={cn("flex flex-col min-h-screen items-center justify-center ", className)}>
      {children}
    </div>
  );
};

// Export
export default BodyLayout;
