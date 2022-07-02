import Link from 'next/link'
import Layout from '../components/Layout';
import PageBlocks from '../components/PageBlocks'

export default function AllComponents({ entry }) {
    // console.log(entry['pageBlocks']);
    return (
        <Layout>
            <PageBlocks content={entry['pageBlocks']} />
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
        </Layout>
    )
}


export const getStaticProps = async (context) => {
    const slug = context?.params?.slug || "all-components";
    // console.log(context.params);
    // Fetching data from jsonplaceholder.
    const res = await fetch(`https://127.0.0.1:51448/api/pages/${slug}.json`,
        {
            credentials: "include",
            headers: {
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true
            },
        }
    );
    let entry = await res.json();

    return {
        props: {
            entry: entry
        }
    }
}