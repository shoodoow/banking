'use client'

import CountUp from 'react-countup';
const AnimatedCountUp = ({ amount }: { amount: number }) => {
    return (
        <CountUp

            decimals={2}
            decimal=","
            prefix="$"

            end={amount} />
    )
}

export default AnimatedCountUp