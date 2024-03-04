import Link from 'next/link';
import React from 'react';

const Navbar = () => {
     return (
          <header className='w-full  py-3 px-2 shadow-md'>
               <nav className='w-full md:w-[70%] mx-auto flex justify-between items-center'>
                    <Link href={'/'} className='font-bold text-2xl'>
                         Crud App
                    </Link>

                    <ul className='flex gap-8'>
                         <li>
                              <Link href={'/'}>Home</Link>
                         </li>
                         <li>
                              <Link href={'/about'}>About</Link>
                         </li>
                         <li>
                              <Link href={'/contact'}>Contact</Link>
                         </li>
                    </ul>
               </nav>
          </header>
     );
};

export default Navbar;