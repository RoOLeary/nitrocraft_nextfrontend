import { useRouter } from 'next/router'
import styles from './../../styles/Inner.module.css';
import Layout from '../../components/Layout';
import StaticHeader from '../../components/StaticHeader';
import Hero from '../../components/Hero';
import Text from '../../components/Text'
import TextVisual from '../../components/TextVisual';
import Faq from '../../components/Faq';
import Related from '../../components/Related';
import Link from 'next/link';
import { getAllPostsByCategory } from '../../lib/api'


export default function Tech({ slug, catPosts, currentPage }) {
    const router = useRouter()
    const { category } = router.query
    const title = slug;
    console.log(category);

    const textVisualContent = {
        title: 'Smoke Potent Weed',
        content: 'Casually arise and get Molly ready for her stroll. Here goes...',
        image: '/assets/img/conf.jpg',
        link: '#',
        linkText: 'Learn More'
      }
     

    return(
        <Layout>
            <StaticHeader content={`Bespoke category: ${title.charAt(0).toUpperCase() + title.slice(1) } - Example Case`} />
            
            <Related related={catPosts} currentslug={`tech`} />
            <section className={'c-section tech'}>
            <div className="o-wrapper">
                <ul>
                    {catPosts.map((post, index) => {
                        console.log(post)
                        return(
                            <li key={index}>
                                <Link href={`/${slug}/${post.slug}`}>
                                    <a>{post.title}</a>
                                </Link>
                                <p>{post.subHeadline}</p>
                            </li>
                        )
                    })}
                </ul>
                <br /><br />
                <Link href={`/`}><a>Home</a></Link>
            </div>  
            </section>  
        </Layout>
    )
}


export async function getServerSideProps(context) {
    const slug = 'tech';
    const data = await getAllPostsByCategory(slug);

    return {
        props: { 
            slug: 'tech',
            catPosts: data.entries,
            currentPage: "1",
        }
    };
}