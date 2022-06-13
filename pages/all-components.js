import Link from 'next/link'
import styles from '../styles/Inner.module.css';
import Header from '../components/Header';
import PageBlocks from '../components/PageBlocks'
import { getPageBySlug } from './../lib/api';

export default function AllComponents({ entry }) {
    return (
        <div className={styles.container}>
            <Header headline="All Fucking Components"/>
            <PageBlocks content={entry['pageBlocks']} />
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
        </div>
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