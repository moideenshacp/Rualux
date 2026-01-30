"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface AnimatedFlipTextProps {
    text: string
    className?: string
}

export function AnimatedFlipText({ text, className }: AnimatedFlipTextProps) {
    return (
        <span className={cn("relative inline-flex overflow-hidden", className)}>
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className="duration-700 group-hover:[transform:rotateY(360deg)] inline-block"
                    style={{
                        transitionDelay: `${i * 0.02}s`,
                        transformStyle: "preserve-3d"
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    )
}
