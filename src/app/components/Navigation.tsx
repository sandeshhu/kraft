'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, Info, BookOpen, Package2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const MobileMenuContext = createContext<{
  open: boolean
  setOpen: (open: boolean) => void
} | null>(null)

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)
  if (!context) {
    // Return a default implementation if context is not available
    return { open: false, setOpen: () => {} }
  }
  return context
}

const navOptions = [
  {
    title: "Home",
    icon: Home,
    href: "/"
  },
  {
    title: "Services",
    icon: Package2,
    href: "/services"
  },
  {
    title: "Blog",
    icon: BookOpen,
    href: "/blog"
  },
  {
    title: "Projects",
    icon: Briefcase,
    href: "/projects"
  },
  {
    title: "About",
    icon: Info,
    href: "/about"
  }
]

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            {navOptions.map((option) => {
              const Icon = option.icon
              const isActive = pathname === option.href
              return (
                <Button
                  key={option.href}
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start gap-3 h-auto py-3"
                  onClick={() => {
                    setOpen(false)
                    window.location.href = option.href
                  }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-base">{option.title}</span>
                </Button>
              )
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </MobileMenuContext.Provider>
  )
}

const Navigation = () => {
  return null
}

export default Navigation