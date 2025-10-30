"use client";

import { cn } from "@/lib/utils";
import { DrawerMenuProps, MenuItem } from "@/types";
import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isOpen,
  onClose,
  items,
  onNavigate,
}) => {
  const [menuStack, setMenuStack] = useState<MenuItem[][]>([items]);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const isRootMenu = menuStack.length === 1;
  const currentMenu = menuStack[menuStack.length - 1];

  const handleItemClick = useCallback(
    (item: MenuItem) => {
      if (item.children && item.children.length > 0) {
        setDirection("forward");
        setMenuStack((prev) => [...prev, item.children!]);
      } else {
        item.onClick?.();
        onNavigate?.(item);
        onClose();
      }
    },
    [onClose, onNavigate]
  );

  const handleBack = useCallback(() => {
    if (menuStack.length > 1) {
      setDirection("back");
      setMenuStack((prev) => prev.slice(0, -1));
    }
  }, [menuStack.length]);

  const slideVariants: Variants = {
    enter: (dir: "forward" | "back") => ({
      x: dir === "forward" ? "100%" : "-100%",
      opacity: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir: "forward" | "back") => ({
      x: dir === "forward" ? "-100%" : "100%",
      opacity: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    }),
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 z-40 bg-black/50"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute bottom-0 left-0 right-0 z-50 mx-2 mb-8 bg-background shadow-lg rounded-3xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            {/* Back Button */}
            {!isRootMenu && (
              <div className="flex items-center px-6 py-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBack}
                  className="flex items-center gap-x-3 rounded-lg hover:bg-muted transition-colors px-3 py-2"
                  aria-label="Go back to previous menu"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <h2
                    id="drawer-title"
                    className="text-lg font-semibold text-foreground truncate"
                  >
                    Back
                  </h2>
                </motion.button>
              </div>
            )}

            {/* Menu Stack Animation */}
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={menuStack.length}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                    mass: 0.8,
                  }}
                  className="px-2 py-2 w-full"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {currentMenu.map((item) => (
                      <MenuItemButton
                        key={item.id}
                        item={item}
                        onClick={() => handleItemClick(item)}
                        hasChildren={!!item.children?.length}
                        variants={itemVariants}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface MenuItemButtonProps {
  item: MenuItem;
  onClick: () => void;
  hasChildren: boolean;
  variants: Variants;
}

const MenuItemButton: React.FC<MenuItemButtonProps> = ({
  item,
  onClick,
  hasChildren,
  variants,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.button
      variants={variants}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "w-full flex items-center justify-between px-4 py-2 rounded-lg",
        "text-left text-foreground transition-colors duration-200",
        "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isFocused && "ring-2 ring-ring ring-offset-2"
      )}
      aria-haspopup={hasChildren ? "menu" : undefined}
      aria-expanded={hasChildren ? false : undefined}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {item.icon && (
          <span className="shrink-0 text-muted-foreground">{item.icon}</span>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{item.label}</p>
          {item.description && (
            <p className="text-sm text-muted-foreground truncate">
              {item.description}
            </p>
          )}
        </div>
      </div>
      {hasChildren && (
        <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground ml-2" />
      )}
    </motion.button>
  );
};
