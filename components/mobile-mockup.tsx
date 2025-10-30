import type React from "react";
import { cn } from "@/lib/utils";

interface MobileMockupProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const MobileMockup: React.FC<MobileMockupProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn("flex items-center justify-center h-screen p-4", className)}
    >
      <div className="relative w-full max-w-sm">
        <div className="relative bg-black rounded-[60px] shadow-2xl overflow-hidden border-8 border-gray-900">
          <div
            className="relative w-full bg-white overflow-hidden"
            style={{ aspectRatio: "9/19.5" }}
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-28 h-7 bg-black rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
            <div
              className="w-full h-full overflow-hidden"
              style={{ paddingTop: "2rem" }}
            >
              {children}
            </div>
          </div>
          <div className="bg-black flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
};
