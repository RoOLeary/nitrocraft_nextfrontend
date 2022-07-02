import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/Inner.module.css'
import Layout from '../../components/Layout'
import StaticHeader from '../../components/StaticHeader'
import Related from '../../components/Related'
import PageBlocks from '../../components/PageBlocks'

export default function Post({ entry }) {
    // console.log(entry);
    const router = useRouter()
    return (
        <Layout>
            <StaticHeader content={entry.headline} />
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    <div className="o-grid o-grid--gap-xxl">
                        {/* <div className="o-grid__col l:o-grid__col--span-4">
                            <h2 className="b-text__heading">{entry.subHeadline}</h2>
                        </div> */}
                        <div className="o-grid__col l:o-grid__col--span-12">
                            <h2 className="b-text__heading">{entry.subHeadline}</h2>
                            <br />
                            <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: entry.body }} />        
                        </div>
                    </div>
                </div>
            </section> 
            <PageBlocks content={entry['blocks']} />   
            {/* <Related related={entry.manualRelatedArticles} currentslug='tech' /> */}
        </Layout>
    )
  }
  

export async function getServerSideProps(context) {
    const { slug } = context.query
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/articles/${slug}.json`);
    let data = await res.json();
    console.log(data);
    return {
        props: { 
            entry: data
        }
    };
}