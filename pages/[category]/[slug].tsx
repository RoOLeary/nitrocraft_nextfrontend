import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'
import StaticHeader from '../../components/StaticHeader'
import Related from '../../components/Related'
import PageBlocks from '../../components/PageBlocks'
import { GetServerSideProps } from 'next'

export default function Post({ entry }) {

    
    const router = useRouter()
    const slug = router.query
    // console.log(slug);
    // const tags = entry.tags;
    // const tagList = Object.entries(tags).map((tag, i) => {
    //     return(
    //         <li key={i}><Link href={`/topics/${tag[1].slug}`} key={i}><a>{tag[1].title}</a></Link></li>
    //     )
    // })
    
    return (
        <Layout>
            <StaticHeader content={entry.headline} />
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    <div className="o-grid o-grid--gap-xxl">
                        <div className="o-grid__col l:o-grid__col--span-4">
                            <h2 className="b-text__heading">{entry.subHeadline}</h2>
                        </div>
                        <div className="o-grid__col l:o-grid__col--span-8">
                            <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: entry.body }} />        
                        </div>
                    </div>
                </div>
                {/* <div>
                    {tagList}
                </div> */}
            </section>
            
            {/* <PageBlocks content={pageBlocks} /> */}

            {/* <Related related={entry.manualRelatedArticles} currentslug={entry.slug} /> */}
        
        </Layout>
    )
  }
  
// This also gets called at build time

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.query.slug ? context.query.slug : 'test-article-three'
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/articles/${slug}.json`);
    let data = await res.json();
    return {
        props: { 
            entry: data
        }
    };
}