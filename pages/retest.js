import Link from 'next/link'
import styles from '../styles/Inner.module.css';
import Layout from '../components/Layout';
import StaticHeader from '../components/StaticHeader';


export default function Retest({ data }) {
    const { title, homeIntro } = data.data[0]
    console.log(data.data[0].title);

    return (
        <Layout>
            <StaticHeader content={title} />
            <p>{homeIntro}</p>
            <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
        </Layout>
    )
}


export const getStaticProps = async () => {
 
    // Fetching data from jsonplaceholder.
    const res = await fetch(
        'https://servd-test-staging.cl-eu-west-3.servd.dev/api/homepage.json', {
            credentials: "include",
            headers: {
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true
            },
        });
    let post = await res.json();
    // Sending fetched data to the page component via props.
    return {
        props: {
            data: post
        }
    }
}



//   export async function getStaticProps() {
//     const res = await fetch('https://servd-test-staging.cl-eu-west-3.servd.dev/api/homepage.json');
//     const post = await JSON.parse(JSON.stringify(res));
  
//     return {
//       props: {
//         post
//       } // will be passed to the page component as props
//     }
//   }