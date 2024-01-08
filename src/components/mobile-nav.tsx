import * as React from "react"
import Link from "next/link"
// import { useLockBody } from "@/hooks/use-lock-body"

// import { MainNavItem } from "types"
// import { siteConfig } from "@/config/site"
import { cn } from "../../lib/utils"
import { Icons } from "@/components/icons"

interface MobileNavProps {
  // items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({  children }: MobileNavProps) {
  // useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Icons.logo /> */}
                  <img
          className="h-auto rounded-xl object-cover"
          src='/workerbull.jpeg'
          width={50}
          height={50}
          alt='logo'
        />
          <span className="font-bold">SooS</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
        <Link
            
              href={'/login'}
              className={
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"}
            >
            login
            </Link>
          {/* {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))} */}
        </nav>
        {children}
      </div>
    </div>
  )
}
