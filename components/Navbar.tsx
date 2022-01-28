import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';

const Navbar = () => {

   const [activeItem, setActiveItem] = useState<string>('');

   const { pathname } = useRouter();

   useEffect(() => {
      if(pathname == '/'){ setActiveItem('About') }
      if(pathname == '/projects'){ setActiveItem('Projects') }
      if(pathname == '/resume'){ setActiveItem('Resume') }
   },[])

   return (
      <div className='flex justify-between px-5 py-3 my-3'>
         <span className='font-bold text-green text-xl md:text-2xl border-b-4'>{activeItem}</span>

         <div className='text-lg flex space-x-5'>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'/>
         </div>
      </div>
   )
};

export default Navbar;
