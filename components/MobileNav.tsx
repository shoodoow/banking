'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constant"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
    return (
        <section className="w-full max-w-p[264px]">

            <Sheet>
                <SheetTrigger>
                    <Image src='/icons/hamburger.svg' alt='menu icon' width={30} height={30} className='cursor-pointer' />
                </SheetTrigger>
                <SheetContent side={'left'} className="border-none bg-white">
                    <SheetClose asChild >
                        <Link href='/' className='flex mb-12 cursor-pointer items-center'>
                            <Image src='/icons/logo.svg' alt='logo' width={34} height={34} />
                            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-2 px-3 '>Horizon</h1>
                        </Link>

                    </SheetClose>

                    <div className="">
                        <SheetClose asChild >
                            <nav className='flex h-full flex-col gap-6 text-white '>
                                {sidebarLinks.map((link, index) => {
                                    const isActive = pathname === link.route
                                    return (
                                        <SheetClose asChild key={link.route}>
                                            < Link className={cn('flex gap-3 items-center p-4 rounded-lg w-full max-w-60 ', {
                                                'bg-bank-gradient ': isActive,
                                            })} href={link.route} key={link.label} >
                                                <Image
                                                    src={link.imgURL}
                                                    alt={link.label}
                                                    width={24}
                                                    height={24}
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })}
                                                />
                                                <p className={cn("text-16 font-semibold text-black-2 ", { "!text-white": isActive })}>
                                                    {link.label}
                                                </p>

                                            </Link>
                                        </SheetClose>
                                    )
                                }
                                )}
                                USER
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>

    )
}

export default MobileNav