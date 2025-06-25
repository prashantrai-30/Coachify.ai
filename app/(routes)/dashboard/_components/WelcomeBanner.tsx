import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div>
      <div className='p-5 rounded-lg bg-gradient-to-r from-[#BE575F] via-[#A338E3] to-[#AC76D6]'>
        <h2 className='font-bold text-2xl text-white'>AI Career Coach Agent</h2>
        <p className='text-white'>Smarter career decisions start here - get tailored advice, real-time market insights, and a roadmap built just for you with the power of AI.</p>
        <Button variant={'outline'} className='mt-3'>Let's Get Started</Button>

      </div>
    </div>
  )
}

export default WelcomeBanner
