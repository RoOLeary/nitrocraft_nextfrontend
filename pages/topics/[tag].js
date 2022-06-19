import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/Inner.module.css'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import { getTags } from './../../lib/api'

export default function Tag({ entries }) {
    const router = useRouter()
    const slug = router.query
    
    
    return (
        
        <Layout>
            <Header headline={slug.tag} />
            <section className="c-section">
            <div className="o-wrapper">
                <h1>Tag: {slug.tag}</h1>
                <p>Description of the tag</p>
                <ul>
                {entries && entries.map((entry, index) => {
                    return(
                        <li key={index}><Link href={`/${slug.tag}/${entry.slug}`}><a>{entry.title}</a></Link></li>
                    )
                })}
                </ul>
            </div>
            </section>
        </Layout>
    
    )
  }
  
// This also gets called at build time
export async function getServerSideProps(context) {
    const { tag } = context.query
    const data = await getTags(tag);

    return {
        props: { 
           entries: data.entries
        }
    };
}