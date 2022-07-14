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
import useSWRInfinite from "swr/infinite";

const fetcher = url => fetch(url).then(res => res.json())
const PAGE_SIZE = 10;

export default function Tech() {
    const router = useRouter()
    const categoryPath = router.query.category
    const title = 'Tech';
    // console.log(catPosts);

  

    const textVisualContent = {
        title: 'Smoke Potent Weed',
        content: 'Casually arise and get Molly ready for her stroll. Here goes...',
        image: '/assets/img/conf.jpg',
        link: '#',
        linkText: 'Learn More'
      }
      
    const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
        `https://ronan-oleary.com/wp-json/wp/v2/posts?page=${index +
        1}&limit=${PAGE_SIZE}`,
    fetcher,
    );
        
    const posts = data ? [].concat(...data) : [];
    const isLoadingInitialData = !data && !error;
    const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

    // console.log(posts)

    return(
        <Layout>
            <StaticHeader content={`Bespoke category: ${title.charAt(0).toUpperCase() + title.slice(1) } - Example Case`} />
            
            <section className={'c-section tech'}>
            <div className="o-wrapper">
                <ul>

                {!data ? <h1 className={'b-text__heading'}>Loading posts...</h1> :
               
                    posts.map((post, index) => {
                        // console.log(post)
                        return(
                            <li key={index}>
                                
                                <Link href={`/tech/${post.slug}`}>
                                    <a><h2 className={'b-text__heading'}>{post.title.rendered}</h2></a>
                                </Link>
                                <br />
                                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}} />
                                <br />
                            </li>
                        )
                    })}
                </ul>
                <br /><br />
                <button
                    className={'c-button'}
                    disabled={isLoadingMore || isReachingEnd}
                    onClick={() => setSize(size + 1)}>
                    {isLoadingMore
                        ? 'Loading...'
                        : isReachingEnd
                            ? 'No More Posts'
                            : 'Load More'}
                </button>
            </div>  
            </section>  
            <TextVisual content={textVisualContent} />
            {/* <Related related={catPosts} currentslug={categoryPath} /> */}
        </Layout>
    )
}



// export async function getServerSideProps(context) {
//     const slug = 'tech';
//     const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts`);
//     let data = await res.json();
//     // console.log(data);
//     return {
//         props: { 
//             catPosts: data,
//             slug: 'tech',
//             currentPage: "1",
//         }
//     };
// }



