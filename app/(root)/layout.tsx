import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = await getLoggedInUser();
    if (!loggedIn) {
        redirect("/sign-in");
    }

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
