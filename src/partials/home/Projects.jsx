import React, { useEffect } from 'react'
import Card from '@/components/Card'

function Projects() {

  useEffect(() => {
    // db()
  }, [])
  

  return (
    <Card bgColor='bg-[#C7D2FE]' disabled py='py-4'>
      <div className='text-left space-y-5'>
        <h2 className='font-semibold text-lg'>Recent Projects</h2>
        <ul>
          <li>
            <div>proyecto 1</div>
          </li>
          <li>
            <div>proyecto 1</div>
          </li>
          <li>
            <div>proyecto 1</div>
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default Projects
