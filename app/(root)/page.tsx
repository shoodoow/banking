import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const page = () => {
    const loggedIn = { firstName: 'John', lastName: 'Doe', email: 'shoodoow@gmail.com' }
    return (
        <div className='no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'>
            <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8  py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll '>
                <header className=' flex flex-col justify-between gap-8 '>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn.firstName}
                        subtext='Access and manage your account and transactions efficiently with our online banking portal.'
                    />


                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={0}
                        totalCurrentBalance={1358}

                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1854 }, { currentBalance: 1854 }]} />


        </div>
    )
}

export default page