import React from 'react'

function NumberColours(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <div className="flex item-center justify-center h-screen">
            <div className='flex gap-12'>
                {numbers.map((number)=><p className={`${number%3===0  ? "text-green-600": "text-black-600"}`}>{number}</p>)}
            </div>
        </div>
    )
}

export default NumberColours
  