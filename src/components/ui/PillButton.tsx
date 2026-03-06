"use client";

import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

type PillButtonProps = ButtonProps & {
      motionProps?: HTMLMotionProps<"div">;
};

export function PillButton({
      className,
      variant = "default",
      motionProps,
      ...props
}: PillButtonProps) {
      const isOutline = variant === "outline";

      return (
            <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-fit"
                  {...motionProps}
            >
                  <Button
                        className={cn(
                              "rounded-full font-bold px-8 transition-all duration-300",
                              variant === "default" && "bg-[#006767] hover:bg-[#004d4d] text-white shadow-lg shadow-teal-900/10 border-transparent",
                              isOutline && "border-2 border-[#006767] text-[#006767] hover:bg-teal-50",
                              className
                        )}
                        variant={variant}
                        {...props}
                  />
            </motion.div>
      );
}
