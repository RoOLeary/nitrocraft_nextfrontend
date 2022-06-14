import Link from 'next/link'
import Layout from '../components/Layout';
import Header from '../components/Header';
import PageBlocks from '../components/PageBlocks'
import { getPageBySlug } from './../lib/api';

export default function AllComponents({ entry }) {
    return (
        <Layout>
            <Header headline="All of the Motherfucking Components"/>
            <PageBlocks content={entry['pageBlocks']} />
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const slug = context?.query?.slug || "all-components";
    const data = await getPageBySlug(slug);
    return {
        props: { 
            entry: data.entry 
        }
    };
}