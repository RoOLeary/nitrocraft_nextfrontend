import Link from 'next/link'
import Layout from '../components/Layout';
import PageBlocks from '../components/PageBlocks'

export default function AllComponents({ entry }) {
    console.log(entry);
    return (
        <Layout>
            <PageBlocks content={entry['pageBlocks']} />
        </Layout>
    )
}


export const getStaticProps = async () => {
    // const slug = context?.params.slug || "all-components";
    // console.log(context);
    // Fetching data from jsonplaceholder.
    const res = await fetch('https://nitroblog.ddev.site:3306/api/pages/all-components.json');
    let entry = await res.json();

    return {
        props: {
            entry: entry
        }
    }
}