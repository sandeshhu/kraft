"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface Tab {
  title: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

interface ExpandedTabsProps {
  tabs: Tab[]
  className?: string
  activeTab?: string
  onTabClick?: (tab: Tab) => void
}

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
            e.preventDefault()
            onTabClick?.(tab)
          }}
          className={`px-4 py-2 rounded-md transition-colors
            ${activeTab === tab.href ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}
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
