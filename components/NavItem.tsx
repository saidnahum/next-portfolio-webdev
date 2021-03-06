import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const NavItem: FunctionComponent<{
   activeItem: string
   setActiveItem: Function
   name: string
   route: string
}> = ({ activeItem, name, route, setActiveItem }) => {
   return (
      activeItem !== name && (
         <Link href={route} scroll={false}>
            <a>
               <span onClick={() => setActiveItem(name)} className='hover:text-green'>{name}</span>
            </a>
         </Link>
      )
   );
};

export default NavItem;
