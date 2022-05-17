import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/Inner.module.css'
import { getPostAndMorePosts } from '../../lib/api'
import Header from '../../components/Header'
import Related from '../../components/Related'
import Slider from '../../components/Slider'

export default function Post({ entry }) {
    const router = useRouter()
    return (
        <>
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
            </section>    
            <Related related={entry.manualRelatedArticles} currentslug='tech' />
        </>
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
