import Link from 'next/link'
import Layout from '../components/Layout';
import PageBlocks from '../components/PageBlocks'

export default function AllComponents({ entry }) {
    return (
        <Layout>
            <PageBlocks content={entry.data[0]['pageBlocks']} />
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
        </Layout>
    )
}


export const getStaticProps = async (context) => {
    const slug = context?.params?.slug || "all-components";
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