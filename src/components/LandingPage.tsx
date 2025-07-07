import Image from 'next/image'
import profilePicture from '../assets/MdShakil-photo.jpg'
// import Button from './Shared/Button'

const LandingPage = () => {
  return (
    <main className='lg:min-h-screen bg-[#212428] lg:fixed lg:left-0 lg:w-1/2 text-white font-semibold pl-60 pt-24'>
      <div className='w-[200px] h-[200px] mb-4 rounded-full bg-gradient-to-r from-[#3f4246]  to-[#212428] p-2'>
        <Image className='w-full h-full object-cover rounded-full' src={profilePicture} alt="Profile-Image"/>
      </div>
      <div>
        <h1 className='text-3xl md:text-6xl'>Hi, I am <br /> <span className='text-[#FF014F]'>Mohammed Shakil</span> <br /> Software Engineer.</h1>
        <p className='text-sm text-slate-600 my-12'>I am the Front-End Developer for #Company in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
      </div>
      <div className='flex items-center gap-5'>
        {/* <Button className='text-[#FF014F] bg-slate-600 px-5 py-2 '>Download My CV</Button> */}
        <button className='px-4 py-2 text-[#FF014F] bg-slate-800 hover:text-[#ff0138] hover:bg-slate-900 pointer'>Download My Cv</button>
        <button className='px-4 py-2 text-[#FF014F] bg-slate-800 hover:text-[#ff0138] hover:bg-slate-900 pointer'>Hire Me</button>
      </div>
    </main>
  )
}

export default LandingPage