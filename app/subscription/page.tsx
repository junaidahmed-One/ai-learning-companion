import React from 'react'
import {PricingTable} from "@clerk/nextjs";


const Subscription = () => {
    return (
        <div>
            <h1 className="text-2xl underline">
                <PricingTable/>
            </h1>
        </div>
    )
}

export default Subscription