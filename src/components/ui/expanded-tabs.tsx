"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { useOnClickOutside } from "usehooks-ts"
import Link from "next/link";

import { cn } from "@/lib/utils"

interface Tab {
  title: string;
  icon: any;
  href: string;
}

interface ExpandedTabsProps {
  tabs: Tab[];
  className?: string;
  activeTab?: string;
  onTabClick?: (tab: Tab) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
}

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
}

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 }

export function ExpandedTabs({
  tabs,
  className,
  activeTab,
  onTabClick,
}: ExpandedTabsProps) {
  return (
    <div className={cn("flex gap-2 rounded-2xl border bg-background p-1 shadow-sm ", className)}>
      {tabs.map((tab) => (
        <Link
          key={tab.title}
          href={tab.href}
          onClick={(e) => {
            e.preventDefault();
            onTabClick?.(tab);
          }}
          className={`px-4 py-2 rounded-md transition-colors
            ${activeTab === tab.href ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}
          `}
        >
          <div className="flex items-center gap-2">
            <tab.icon className="h-4 w-4" />
            <span>{tab.title}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
