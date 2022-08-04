import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import styles from './../styles/Nav.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'

const Nav = (): JSX.Element => {
    const { data: session } = useSession();

    // console.log(session);

    const menuRef = useRef(null);
    const unitRef = useRef(null);
    const mobTogglRef = useRef(null); 

    const toggleMobileMenu = (e) => {
        // @ts-ignore
        mobTogglRef.current.classList.toggle('mobile-menu-active');
        // @ts-ignore
        menuRef.current.classList.toggle('show');
    }

    const closeOnChange = (e) => {
        // console.log(mobTogglRef.current);
        setTimeout((e) => {
            // @ts-ignore
            mobTogglRef.current.classList.toggle('mobile-menu-active');
            // @ts-ignore
            menuRef.current.classList.toggle("show");
        }, 500)
    }

    const update = (height) => {
        const num = window.scrollY / height
        const multiplier = Math.min(Math.max(num, 0), 1)
        // @ts-ignore
        unitRef.current.style.setProperty('--multiplier', multiplier)
    }

    useEffect(() => {
        // @ts-ignore
        let height = unitRef.current.offsetHeight;
        window.addEventListener('scroll', () => update(height)); 
    }, []);

    return(
        <nav className={'c-nav js-nav t-dark'} ref={unitRef}>
            <div className={'c-nav__left'}>
                <Link href={`/`}>
                    <a className={"c-nav__logoLink"}>
                        {/* <img alt="TNW Dublin" className="c-nav__logo" src="/assets/img/ft-tnw-dublin.svg" /> */}
                    </a>
                </Link>
            </div>
            <label className={'c-nav__mobileMenuToggle'} htmlFor="navMobileMenuToggle" ref={mobTogglRef} onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </label>
            <div className="c-nav__mobileMenu c-nav__right" ref={menuRef}>
                <ul className="c-nav__menu">
                    <li className="c-nav__menuItem"><Link href={"/"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Home</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/about"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>About</a></Link></li>
                    <li className="c-nav__menuItem"><Link href={"/tech"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Tech</a></Link></li>
                    {/* <li className="c-nav__menuItem"><Link href={"/test"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Test</a></Link></li> */}
                    <li className="c-nav__menuItem"><Link href={"/contact"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Contact</a></Link></li>
                    {session ? <li className="c-nav__menuItem"><Link href={"/members"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Members</a></Link></li> : ''}
                    <li className="c-nav__menuItem">
                        {!session ? <>
                        <a className="c-button c-button--primary" onClick={signIn}>Sign In</a></>
                        :
                        <>
                        <a className="c-button c-button--primary" onClick={signOut}>Sign Out</a>
                        </>}
                    </li>
                    {/* <li className="c-nav__menuItem"><a className="c-button c-button--primary">Login</a></li> */}
                </ul>
                {session ? <div>Signed in as {session.user.name}</div> : '' }
            </div>
        </nav>
    )
}

export default Nav;