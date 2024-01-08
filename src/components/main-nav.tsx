"use client"

import * as React from "react"
import Link from "next/link"
// import { useSelectedLayoutSegment } from "next/navigation"

// import { MainNavItem } from "types"
// import { siteConfig } from "@/config/site"
import { cn } from "../../lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
  // items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({  children }: MainNavProps) {
  // const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
      
        <img
          className="h-auto rounded-xl object-cover"
          src="/soos.jpg"
          width={50}
          height={50}
          alt="logo"
        />

        <span className="hidden font-bold sm:inline-block">
      SooS
        </span>
      </Link>
      <nav className="hidden gap-6 md:flex">
      
    
        
        </nav>
      {/* {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-semibold text-slate-600 sm:text-sm",
                item.href.startsWith(`/${segment}`) && "text-slate-900",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null} */}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <Icons.close />
        ) : (
          <img
            className="h-auto rounded-xl object-cover"
            src="workerbull.jpeg"
            width={50}
            height={50}
            alt="logo"
          />
        )}
        <span className="font-bold">Menu</span>
      </button>
      {/* {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )} */}
    </div>
  )
}