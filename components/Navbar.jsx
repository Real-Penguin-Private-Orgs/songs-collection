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
        </nav>
    )
}