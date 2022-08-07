import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import { AnimateSharedLayout, motion } from 'framer-motion'
import { isActiveLink } from '../lib/utils'

const links: { name: string; href: string }[] = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Tech',
        href: '/tech',
    },
    {
        name: 'All Comps',
        href: '/all-components',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
]

const Nav = (): JSX.Element => {
    const router = useRouter()
    const { data: session } = useSession();
    const menuRef = useRef(null);
    const unitRef = useRef(null);
    const mobTogglRef = useRef(null); 

    const toggleMobileMenu = (e) => {
        mobTogglRef.current.classList.toggle('mobile-menu-active');
        menuRef.current.classList.toggle('show');
    }

    const closeOnChange = (e) => {
        // console.log(mobTogglRef.current);
        setTimeout((e) => {
            mobTogglRef.current.classList.toggle('mobile-menu-active');
            menuRef.current.classList.toggle("show");
        }, 500)
    }

    const update = (height) => {
        const num = window.scrollY / height
        const multiplier = Math.min(Math.max(num, 0), 1)
        unitRef.current.style.setProperty('--multiplier', multiplier)
    }

    useEffect(() => {
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
                <AnimateSharedLayout>
                <ul className="c-nav__menu">
                    {links.map(({ name, href }) => (
                        <li key={name} className="c-nav__menuItem">
                            <Link href={href}>
                                <a className={'c-nav__menuLink'} onClick={(e) => closeOnChange(e)}>
                                    {name}
                                    {isActiveLink(href, router.pathname) && (
                                        <motion.div
                                            layoutId="navigation-underline"
                                            className="navigation-underline"
                                            animate
                                        />
                                    )}
                                </a>
                            </Link>
                        </li>
                    ))}
                   
                   
                    {/* {session ? <li className="c-nav__menuItem"><Link href={"/members"}><a className="c-nav__menuLink" onClick={(e) => closeOnChange(e)}>Members</a></Link></li> : ''}
                    <li className="c-nav__menuItem">
                        {!session ? <>
                        <a className="c-button c-button--primary" onClick={signIn}>Sign In</a></>
                        :
                        <>
                        <a className="c-button c-button--primary" onClick={signOut}>Sign Out</a>
                        </>}
                    </li> */}
                    {/* <li className="c-nav__menuItem"><a className="c-button c-button--primary">Login</a></li> */}
                </ul>
                </AnimateSharedLayout>
                {session ? <div>Signed in as {session.user.name}</div> : '' }
            </div>
        </nav>
       
    )
}

export default Nav;