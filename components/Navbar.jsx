import { useState } from "react";
import Link from 'next/link'
import style from '../styles/components/Navbar.module.css'

export default function Navbar() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className={style.navbar_default}>
            <Link href='/'>
                <a className='inline-flex items-center p-2 mr-4 '>
                    <span className={style.navbar_default_text_title}>
                        Songs Collection
                    </span>
                </a>
            </Link>
             {/** Hamburger Icon */}
             <button className={style.navbar_default_ham} onClick={handleClick}>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
             {/** Hamburger Icon */}

             <div className={`${
                 active ? '' : 'hidden'
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className={style.navbar_default_text_rows}>
                    <Link href='/'>
                        <a className={style.navbar_default_text_items}>
                            Home
                        </a>
                    </Link>
                    <Link href='/song'>
                        <a className={style.navbar_default_text_items}>
                            Songs List
                        </a>
                    </Link>
                    <Link href='/album'>
                        <a className={style.navbar_default_text_items}>
                            Albums List
                        </a>
                    </Link>
                </div>
            </div>

        </nav>
    )
}