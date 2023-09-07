import Perfil from '@/partials/home/Perfil'
import CV from '@/partials/home/CV'
import Maps from '@/partials/home/Maps'
import GitHub from '@/partials/home/GitHub'
import Projects from '@/partials/home/Projects'
import ContactForm from '@/partials/home/ContactForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <div className='grid grid-cols-6 gap-6 max-w-3xl mx-auto'>
      <div className='col-span-6 md:col-span-4'>
        <Perfil />
      </div>
      <div className='col-span-6 md:col-span-2'>
        <CV />
      </div>
      <div className='col-span-6 md:col-span-3 h-[200px]'>
        <Maps />
      </div>
      <div className='col-span-6 md:col-span-3'>
        <GitHub />
      </div>
      <div className='col-span-6 md:col-span-6'>
        <Projects />
      </div>
      <div className='col-span-6 md:col-span-6'>
        <ContactForm />
      </div>
      <ToastContainer />
    </div>
  )
}
