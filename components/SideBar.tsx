'use client'
import { sidebarLinks } from '@/constant'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'

const SideBar = ({ user }: SiderbarProps) => {
    const pathname = usePathname()

    return (
        <section className='sticky left-0 top-0 flex h-screen  flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]   '>
            <nav className='flex flex-col gap-4'>

                <Link href='/' className='flex mb-12 cursor-pointer items-center'>
                    <Image src='/icons/logo.svg' alt='logo' width={34} height={34} className='
                    size-[24px] max-xl:size-14 mx-2' />
                    <h1 className='text-16 font-semibold text-black-2 max-xl:hidden'>Horizon</h1>
                </Link>

                {sidebarLinks.map((link, index) => {
                    const isActive = pathname === link.route
                    return (
                        < Link className={cn('sidebar-link', {
                            'bg-bank-gradient ': isActive,
                        })} href={link.route} key={link.label} >
                            <div className="relative size-6">
                                <Image
                                    src={link.imgURL}
                                    alt={link.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert-0': isActive
                                    })}
                                />
                            </div>
                            <p className={cn("text-16 font-semibold text-black-2 max-xl:hidden", { "!text-white": isActive })}>
                                {link.label}
                            </p>

                        </Link>
                    )
                }
                )}
                USER
            </nav>

            <Footer user={user} />
        </section >
    )
}

export default SideBar