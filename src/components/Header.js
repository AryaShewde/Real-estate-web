import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../assets/img/logo.svg';

const Header = () => {
  return <>
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex flex-col gap-2 sm:flex-row justify-between items-center'>
        {/* logo */}
        {/* <Link to='/'><img src={Logo} alt="" /></Link> */}
        <Link to='/'><h1 className='font-bold text-2xl'>Home<span className='text-violet-700'>Sweet</span>Home<span className='text-violet-700'>.</span></h1></Link>
        {/* button */}
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to="">Log in</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to="">Sign in</Link>
        </div>
      </div>
    </header>
  </>;
};

export default Header;
