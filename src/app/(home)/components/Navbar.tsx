'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { LOGO } from '../../../../public/assets/images/images'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu, X, Home, Briefcase, Info, BookOpen, Package, Mail, Settings, Package2, LucideSettings2, LucideSettings } from "lucide-react"
import {BsDiscord} from 'react-icons/bs'
import { ExpandedTabs } from '@/components/ui/expanded-tabs'
import ThemeToggleButton from '@/components/ui/theme-toggle-button'
import { usePathname } from 'next/navigation'
import TransitionLink from '@/app/components/TransitionLink'

const Navbar = () => {
    const pathname = usePathname()
    const option = [
           {
             title: "Home",
             icon: Home,
             href: "/"
           },
           {
             title: "Services",
             icon:  Package2,
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
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const currentTheme = theme === 'system' ? systemTheme : theme
    
    const logoSrc = mounted && currentTheme === 'dark' 
        ? LOGO.LIGHT_LOGO 
        : LOGO.DARK_LOGO

    return (
      <section className='py-3 sticky top-0 z-50'>
       <div className='container px-4 md:px-10 lg:px-2 mx-auto'>
          <div className='flex items-center justify-between rounded-full px-4 md:px-0'>
             <div className='flex items-center gap-2'>
                <Image
                  alt='logo'
                  src={logoSrc}
                  className='w-30 h-20 object-contain transition-all duration-300'
                  priority // Add priority to ensure fast loading
                />
             </div>

             <div className='gap-5 hidden md:block'>
               <ExpandedTabs
                 tabs={option}
                 className='mt-2 font-mono'
                 activeTab={pathname}
                 onTabClick={(tab) => window.location.href = tab.href}
               />
             </div>
             <div>
                <div className='flex items-center gap-2'>
                   {/* <Button variant={"ghost"} className='py-2 px-3' >
                      <Link
                       href={"https://github.com/sandeshhu"}
                      >
                        <GitBranch className='size-4' />
                      </Link>
                   </Button> */}
                   
                   <ThemeToggleButton
                    variant='circle-blur'
                   />

                   
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}

export default Navbar