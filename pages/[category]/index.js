import { useRouter } from 'next/router'
import styles from './../../styles/Inner.module.css';
import Layout from './../../components/Layout';
import Header from './../../components/Header';
import TextVisual from './../../components/TextVisual';
import Related from './../../components/Related';
import Link from 'next/link';
import { getAllPostsByCategory } from './../../lib/api'
import StaticHeader from '../../components/StaticHeader';


export default function Category({ catPosts, currentPage }) {
    const router = useRouter()
    const categoryPath = router.query.category
    console.log(currentPage); 

    const textVisualContent = {
        title: 'Go to Work',
        content: 'Something something something shemales. Here goes...',
        image: '/assets/img/conf.jpg',
        link: '#',
        linkText: 'Learn More'
      }
     

    return(
        <Layout>
            <StaticHeader content={`Category: ${categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1) } - Generic`} />
            <Related related={catPosts} currentslug={categoryPath} />
            <TextVisual content={textVisualContent} />
            <section className={'c-section category'}>
            <div className="o-wrapper">
                <ul>
                    {catPosts.map((post, index) => {
                        // console.log(post)
                        return(
                            <li key={index}>
                                <Link href={`/${categoryPath}/${post.slug}`}>
                                    <a>{post.title}</a>
                                </Link>
                                <p>{post.subHeadline}</p>
                            </li>
                        )
                    })}
                </ul>
                
                
                <Link href={`/`}><a>Home</a></Link>
            </div> 
            </section>
        </Layout>
    )
}


export async function getServerSideProps(context) {
    const slug = context.query.category
    const data = await getAllPostsByCategory(slug);

    return {
        props: { 
            catPosts: data.entries,
            currentPage: "1",
        }
    };
}