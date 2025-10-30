"use client";
import { useState } from "react";
import { MenuItem } from "@/types";
import { Button } from "./ui/button";
import { APP_DRAWER_ITEMS } from "@/data";
import { DrawerMenu } from "./drawer-menu";
import { MobileMockup } from "./mobile-mockup";

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (item: MenuItem) => {
    console.log(`Navigating to: ${item}`);
  };

  return (
    <div className="h-screen">
      <MobileMockup>
        <div className="h-full flex flex-col items-center justify-center">
          <Button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="bg-[#3C8DFF] rounded-full border border-[#2B80EE] hover:bg-[#2a83ff] hover:cursor-pointer"
          >
            Open Menu
          </Button>
        </div>
        <DrawerMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={APP_DRAWER_ITEMS}
          onNavigate={handleNavigate}
        />
      </MobileMockup>
    </div>
  );
};
