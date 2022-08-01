import Link from 'next/link'
import styles from '../styles/Inner.module.css';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PageBlocks from '../components/PageBlocks'
import { getPageBySlug } from '../lib/api';
// import useIntersection from "./../hooks/useIntersection";
import { useRef, useEffect } from "react";
export default function About({ entry }) {
    
    const ioRef = useRef(); 

    let aboutHeader = {
        headline: 'About Page'    
    }

    // const inViewport = useIntersection(ioRef, "25px");

    // useEffect(() => {
    //     if (inViewport) {
    //             console.log("in viewport:", ioRef.current.innerHTML);
    //     } else{
    //         if(ioRef.current != '' || undefined ){
    //             console.log("not in viewport:", ioRef.current.innerHTML);
    //         }
    //     }
    // }, [inViewport])
    

    return (
        <Layout>
            <Header content={aboutHeader} />
            <PageBlocks content={entry.data[0]['pageBlocks']} />
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
            {/* <div ref={ioRef}>View</div> */}
        </Layout>
    )
}

// export const getStaticProps = async (context) => {
//     const slug = context?.params?.slug || "about";
//     const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/${slug}.json`);
//     let entry = await res.json();

//     return {
//         props: {
//             entry: entry
//         }
//     }
// }



export const getStaticProps = async (context) => {
    const slug = context?.params?.slug || "about";
    // console.log(context.params);
    const res = await fetch(`https://cities.thenextweb.com/api/pages/${slug}.json`,
        {
            credentials: "include",
            headers: {
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true
            },
        }
    );
    
    let entry = await res.json();
    // console.log(entry);
    return {
        props: {
            entry: entry
        }
    }
}