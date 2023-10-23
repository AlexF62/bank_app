import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constans';

const Navbar = () => {
    const [toogle, setToogle] = useState(false);
    return (
        <nav className='w-full flex py-5 justify-between items-center navbar'>
            <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${
                            index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                        } text-white`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex-1 flex justify-end items-center'>
                <img
                    className='w-[28px] h-[28px] object-contain'
                    src={toogle ? close : menu}
                    alt='menu'
                    onClick={() => setToogle((prev) => !prev)}
                />
                <div
                    className={`${
                        toogle ? 'flex' : 'hidden'
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar `}
                >
                    <ul className='  justify-end list-none flex flex-col items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                                    index === navLinks.length - 1
                                        ? 'mr-0'
                                        : 'mb-4'
                                } text-white`}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
