import Link from 'next/link'
import Layout from '../components/Layout';
import Header from '../components/Header';
import PageBlocks from '../components/PageBlocks'
// import { getPageBySlug } from './../lib/api';

export default function AllComponents({ entry }) {
    // console.log(entry);
    return (
        <Layout>
            <PageBlocks content={entry['pageBlocks']} />
        </Layout>
    )
}

export const getStaticProps = async (context) => {
    const slug = context?.query || "all-components";
    const res = await fetch(`http://nitroblog.nitro/api/pages/${slug}.json`);
    
    let allComps = await res.json();
    // Sending fetched data to the page component via props.
    return {
        props: {
            entry: allComps
        }
    }
}

// GraphQL
// export async function getServerSideProps(context) {
//     const slug = context?.query?.slug || "all-components";
//     const data = await getPageBySlug(slug);
//     return {
//         props: { 
//             entry: data.entry 
//         }
//     };
// }