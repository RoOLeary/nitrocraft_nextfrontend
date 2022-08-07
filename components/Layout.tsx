import React, { ReactNode } from 'react'
import Head from 'next/head';
import SEO from './SEO';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (

    <>
        <Head>
            <title>NextJS Craft</title>
            <link rel="icon" href="/favicon.ico" />
            <SEO />
        </Head>
       
            {children}
    </>

)

export default Layout; 