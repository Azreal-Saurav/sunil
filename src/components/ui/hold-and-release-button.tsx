"use client";

import * as React from "react"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

interface ButtonHoldAndReleaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    holdDuration?: number;
    actionOnRelease?: () => void;
    children: React.ReactNode;
}

function ButtonHoldAndRelease({
    className,
    holdDuration = 2000,
    actionOnRelease,
    children,
    ...props
}: ButtonHoldAndReleaseProps) {
    const [isHolding, setIsHolding] = useState(false);
    const controls = useAnimation();

    const handleHoldStart = () => {
        setIsHolding(true);
        controls.start({
            width: "100%",
            transition: {
                duration: holdDuration / 1000,
                ease: "linear",
            },
        });
    }

    const onAnimationComplete = () => {
        if(isHolding) {
            if (actionOnRelease) {
                actionOnRelease();
            }
            handleHoldEnd(false);
        }
    }
    
    const handleHoldEnd = (animate = true) => {
        if (!isHolding) return;
        setIsHolding(false);
        controls.stop();
        if (animate) {
            controls.start({
                width: "0%",
                transition: { duration: 0.3 },
            });
        } else {
            controls.set({ width: "0%" });
        }
    }

    return (
        <Button
            className={cn(
                "min-w-40 relative overflow-hidden touch-none",
                "bg-destructive/10 dark:bg-destructive/10",
                "hover:bg-destructive/20 dark:hover:bg-destructive/20",
                "text-destructive dark:text-destructive-foreground",
                "border border-destructive/20 dark:border-destructive/30",
                className
            )}
            onMouseDown={handleHoldStart}
            onMouseUp={() => handleHoldEnd()}
            onMouseLeave={() => handleHoldEnd()}
            onTouchStart={(e) => {
                e.preventDefault();
                handleHoldStart();
            }}
            onTouchEnd={(e) => {
                e.preventDefault();
                handleHoldEnd();
            }}
            onTouchCancel={() => handleHoldEnd()}
            {...props}
        >
            <motion.div
                initial={{ width: "0%" }}
                animate={controls}
                onAnimationComplete={onAnimationComplete}
                className={cn(
                    "absolute left-0 top-0 h-full",
                    "bg-destructive/20",
                    "dark:bg-destructive/30"
                )}
            />
            <span className="relative z-10 w-full flex items-center justify-center gap-2">
                {isHolding ? 'Loading...' : children}
            </span>
        </Button>
    );
}

export { ButtonHoldAndRelease }
