import React from 'react'
import Card from '../../components/Card'
import Link from 'next/link'
import Image from 'next/image'

function ProjectItem({img_url, img_alt, project_name = 'projecto sin nombre', project_desc, demo_link = '/', code_link = '/'}) {
  return (
    <div className='text-sm'>
      <Card disabled px='px-2' py='py-2' h='h-fit'>
        <Link href={'/'}>
          <div className='flex justify-center items-center h-fit'>
            <Image
              src={img_url}
              width={150}
              height={262.5}
              alt={img_url}
            />
          </div>
        </Link>
      </Card>
      <div className='flex flex-col mt-5 space-y-4'>
        <div className='flex justify-between'>
          <div className='font-semibold'>{project_name}</div>
          <div className='space-x-2'>
            <Link
              className='py-1 font-medium bg-slate-200 px-4 rounded-md hover:bg-slate-900 hover:text-slate-100'
              href={demo_link}
            >
              Demo
            </Link>
            <Link
              className='py-1 font-medium bg-slate-200 px-4 rounded-md hover:bg-slate-900 hover:text-slate-100'
              href={code_link}
            >
              Code
            </Link>
          </div>
        </div>
        <div>
          {project_desc}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
