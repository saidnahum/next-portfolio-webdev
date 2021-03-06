import Image from 'next/image';
import React from 'react';
import profile from '../assets/img/said.jpeg';
import { AiFillGithub as GithubIcon, AiFillLinkedin as LinkedinIcon, AiFillYoutube as YoutubeICon } from 'react-icons/ai'
import { GoLocation as LocationIcon } from 'react-icons/go'
import { GiTie as TieIcon} from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {

   const { theme, setTheme } = useTheme();

   const changeTheme = () => {
      setTheme(theme==='light' ? 'dark' : 'light')
   }

   const email = 'saidnahum.dev@gmail.com';

   return (
      <div>
         <div className='w-32 h-32 mx-auto rounded-full'>
            <Image
               src={profile}
               alt="Profile Image"
               width={460}
               height={460}
               objectFit='cover'
               layout='responsive'
               className='rounded-full'
            />
         </div>

         <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-green'>Said</span> Nahum
         </h3>

         <p className='bg-gray-200 dark:bg-dark-200 px-2 py-1 my-3 rounded-full'>Desarrollador Web</p>
         <a 
            className='bg-gray-200 dark:bg-dark-200 px-2 py-1 rounded-full flex items-center justify-center cursor-pointer' 
            href='/docs/Said Montes CV 2019.pdf'
            download='CV Said.pdf'

         > 
            <TieIcon className='w-6 h-6'/> Descargar CV
         </a>

         {/* Social Icons */}
         <div className='flex justify-around mx-auto my-5 text-green w-9/12 md:w-full'>
            {/* <a>
               <YoutubeICon className='w-8 h-8 cursor-pointer'/>
            </a> */}

            <a href='https://github.com/saidnahum' target='_blank'>
               <GithubIcon className='w-8 h-8 cursor-pointer'/>
            </a>

            {/* <a>
               <LinkedinIcon className='w-8 h-8 cursor-pointer'/>
            </a> */}
         </div>

         {/* Adress */}
         <div className='my-5 py-4 bg-gray-200 dark:bg-dark-200 ml-[-1rem] mr-[-1rem]'>
            <div className='flex items-center justify-center space-x-2'>
               <LocationIcon/> <span>Ciudad de M??xico, M??xico</span>
            </div>
            <p className='my-2'>{email}</p>
            <p className='my-2'>5530784358</p>
         </div>

         {/* Buttons */}
         <button 
            className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none transition duration-300 md:hover:scale-110'
            onClick={() => window.open(`mailto:${email}`)}
         >
            Contacto
         </button>

         <button 
            className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 transition duration-300 md:hover:scale-110'
            onClick={changeTheme}
         >
            {
               theme === 'light' ? 'Dark UI' : 'Light UI'
            }
         </button>
      </div>
   )
};

export default Sidebar;