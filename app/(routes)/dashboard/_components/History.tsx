'use client' //react hook not work on server side

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'

const History = () => {
    const [userHistory,setUserHistory] = useState([]);
  return (
    <div className='mt-5 p-5 border rounded-xl'>
        <h2 className='font-bold text-lg'>Previous History</h2>
        <p>What Your previously work on, You can find here</p>
        {userHistory?.length == 0 &&
            <div className='flex items-center justify-between mt-6 flex-col'>
                <Image src={'/idea.png'} alt='bulb'
                    width={50}
                    height={50}
                />
                <h2>You do not have any history</h2>
                <Button className='mt-5'>Explore AI Tools</Button>
            </div>
        }
    </div>
  )
}

export default History
