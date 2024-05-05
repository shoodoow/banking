import React from 'react'
import AnimatedCountUp from './AnimatedCountUp'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotlaBalanceBoxProps
) => {
    return (
        <section className='flex w-full items-center gap-4 rounded-xl border border-gray-100 p-4 shadow-chart sm:gap-6 sm:p-6'>
            <div className='flex size-full max-w-[100px] items-center sm:max-w-[120px]'>
                <DoughnutChart account={[]} />
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='header-2'>Bank Accounts:  {totalBanks}</h2>
                <div className='flex flex-col gap-2'>
                    <p>
                        Total Current Balance: <AnimatedCountUp amount={totalCurrentBalance} />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox