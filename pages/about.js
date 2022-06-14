import Link from 'next/link'
import styles from '../styles/Inner.module.css';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PageBlocks from '../components/PageBlocks'
import { getPageBySlug } from './../lib/api';

export default function About({ entry }) {
    return (
        <Layout>
            {/* <Header headline="About"/> */}
            <PageBlocks content={entry['pageBlocks']} />
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const slug = context?.query?.slug || "about";
    const data = await getPageBySlug(slug);
    return {
        props: { 
            entry: data.entry 
        }
    };
}