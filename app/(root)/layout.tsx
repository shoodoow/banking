import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'John', lastName: 'Doe' }
    return (
        <main className="flex h-screen w-full font-inter">
            <SideBar user={loggedIn} />
            <div className="flex size-full flex-col">
                <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
                    <Image src="/icons/logo.svg" alt="menu icon" width={34} height={34} className="size-[24px] max-xl:size-14 mx-2" />
                    <div>
                        <MobileNav user={loggedIn} />
                    </div>

                </div>
                {children}

            </div>
        </main>
    );
}
