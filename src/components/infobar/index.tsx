'use client'
import React, { useEffect } from 'react'
import { ModeToggle } from '../global/mode-toggle'
import { Book, Headphones, Search } from 'lucide-react'
import Templates from '../icons/cloud_download'
import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useBilling } from '@/providers/billing-provider'
import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_action/payment-connecetions'

type Props = {}

const InfoBar = (props: Props) => {
  const { credits, tier, setCredits, setTier } = useBilling()

  const onGetPayment = async () => {
    const response = await onPaymentDetails()
    if (response) {
      setTier(response.tier!)
      setCredits(response.credits!)
    }
  }

  useEffect(() => {
    onGetPayment()
  }, [])

  return (
    <div className="flex flex-row justify-between gap-6 items-center px-4 py-4 w-full dark:bg-black ">
        <div className='flex'>
            <p className="text-4xl font-bold">Qua</p>
            <Image
            src="/fuzzieLogo.png"
            width={15}
            height={15}
            alt="Quatrix logo"
            className="shadow-sm"
            />
            <p className="text-4xl font-bold">rix</p>
            <div className='mt-3'>
              <span className='text-xs ml-5 mt-5'>-By Aryan Mishra❤️</span>
            </div>
        </div>
        <span className="flex items-center gap-2 font-bold">
            <p className="text-sm font-light text-gray-300">Credits</p>
            {tier == 'Unlimited' ? (
            <span>Unlimited</span>
            ) : (
            <span>
                {credits}/{tier == 'Free' ? '10' : tier == 'Pro' && '100'}
            </span>
            )}
        </span>
        <span className="flex items-center rounded-full bg-muted px-4">
            <Search />
            <Input
            placeholder="Quick Search"
            className="border-none bg-transparent"
            />
        </span>
        <div className='flex flex-row gap-7 mr-4'>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Headphones />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Contact Support</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Book />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Guide</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <UserButton />
        </div>
    </div>
  )
}

export default InfoBar