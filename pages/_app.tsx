import type { AppProps } from 'next/app';
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Nav from "../components/Nav";
import Loader from "../components/Loader";
// pages/_app.js
import { SessionProvider } from "next-auth/react";
import Router from 'next/router'
import { useState, useEffect } from 'react';
import NProgress from "nprogress"

declare const window: any

function NitroBlogFrontend({ Component, pageProps:  { session, ...pageProps }}: AppProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const router = Router;

  const handleRouteChange = () => {
    document.body.scrollIntoView();
  }

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
  })

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true);
      NProgress.start();
      console.log('route changing.')
    });

    Router.events.on("routeChangeComplete", (url)=>{
      console.log('route changed')
      setIsLoading(false);
      NProgress.done(false);
      router.events.on('routeChangeComplete', handleRouteChange)
     
    });

    Router.events.on("routeChangeError", (url) =>{
      console.log('something is bollocksed.')
    });

  }, [Router])

  return (
    <SessionProvider session={session}>  
        <Nav />
        {/* <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        > */}
          {isLoading && <Loader /> } 
         <Component {...pageProps} />
        {/* </AnimatePresence> */}
    </SessionProvider>
  );
}

export default NitroBlogFrontend
