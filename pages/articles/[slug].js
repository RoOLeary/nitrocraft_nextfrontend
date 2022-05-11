import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/Inner.module.css'
import { getPostAndMorePosts } from './../../lib/api'
import Header from './../../components/Header'
import Related from './../../components/Related'
import Slider from './../../components/Slider'

export default function Post({ entry }) {
    const router = useRouter()
    console.log(entry.manualRelatedArticles);
    
    return (
        <section>
            <Header headline={entry.headline} />
            <main className="o-wrapper">
                <div className='article-container' style={{ "padding": "4em 0" }}>
                    <h2 className={styles.title} dangerouslySetInnerHTML={{__html: entry.subHeadline}} />
                    <br />
                    <div className={styles.grid}>
                        <div className={styles.paragraph} dangerouslySetInnerHTML={{__html: entry.articleBody}} />
                        <div>I'm an advert</div>
                    </div>
                </div>
                <Link href={`/`}><a>Home</a></Link>
            </main>  
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
