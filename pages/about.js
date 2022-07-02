import Link from 'next/link'
import styles from '../styles/Inner.module.css';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PageBlocks from '../components/PageBlocks'
import { getPageBySlug } from '../lib/api';

export default function About({ entry }) {
    return (
        <Layout>
            {/* <Header headline="About"/> */}
            <PageBlocks content={entry['pageBlocks']} />
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
        </Layout>
    )
}

export const getStaticProps = async (context) => {
    const slug = context?.params?.slug || "about";
    const res = await fetch(`https://127.0.0.1:51448/api/pages/${slug}.json`);
    let entry = await res.json();

    return {
        props: {
            entry: entry
        }
    }
}