'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { menuOptions } from '@/lib/constant'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import { ModeToggle } from '../global/mode-toggle'
import Image from 'next/image'

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname()

  return (
    <nav className=" dark:bg-black h-screen max-h-screen overflow-scroll  justify-between flex items-center flex-col  gap-5 py-6 px-4">
      <div className="flex items-center justify-center flex-col gap-4 mt-14">
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        'group h-12 w-12 flex items-center justify-center rounded-lg  cursor-pointer',
                        {
                          'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-44 overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick
              className="dark:text-white"
              size={12}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={12}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database
              className="text-muted-foreground"
              size={12}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={12}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <ModeToggle />
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="bg-black/10 backdrop-blur-xl"
          >
            <p>Toggle Theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
        
      </div>
    </nav>
  )
}

export default MenuOptions