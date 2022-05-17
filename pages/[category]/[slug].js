import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/Inner.module.css'
import { getPostAndMorePosts } from '../../lib/api'
import Header from '../../components/Header'
import Related from '../../components/Related'
import PageBlocks from '../../components/PageBlocks'

export default function Post({ entry }) {

    const pageBlocks = entry['pageBlocks'];

    const router = useRouter()
    const slug = router.query
    const tags = entry.tags;
    const tagList = Object.entries(tags).map((tag, i) => {
        return(
            <li key={i}><Link href={`/topics/${tag[1].slug}`} key={i}><a>{tag[1].title}</a></Link></li>
        )
    })
    
    return (
        <section>
            <Header headline={entry.headline} />
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    <div className="o-grid o-grid--gap-xxl">
                        <div className="o-grid__col l:o-grid__col--span-4">
                            <h2 className="b-text__heading">{entry.subHeadline}</h2>
                        </div>
                        <div className="o-grid__col l:o-grid__col--span-8">
                            <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: entry.articleBody}} />        
                        </div>
                    </div>
                </div>
                <div>
                    {tagList}
                </div>
            </section>
            
            <PageBlocks content={pageBlocks} />

            <Related related={entry.manualRelatedArticles} currentslug={entry.slug} />
        
        </section>
    )
  }
  
// This also gets called at build time
export async function getServerSideProps(context) {
    const { slug } = context.query
    const data = await getPostAndMorePosts(slug);

    return {
        props: { 
           entry: data.entries[0]
        }
    };
}
