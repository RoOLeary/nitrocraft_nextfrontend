import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Inner.module.css';
import Header from '../components/Header';
import PageBlocks from '../components/PageBlocks'
import { getPageBySlug } from './../lib/api';

export default function About({ entry }) {
    const pageBlocks = entry['pageBlocks'];
    return (
        <div className={styles.container}>
            <Header headline="About"/>
            <PageBlocks content={pageBlocks} />
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
        </div>
    )
}

// This also gets called at build time
export async function getServerSideProps(context) {
    const slug = context?.query?.slug || "about";
    const data = await getPageBySlug(slug);
    return {
        props: { 
            entry: data.entry 
        }
    };
}