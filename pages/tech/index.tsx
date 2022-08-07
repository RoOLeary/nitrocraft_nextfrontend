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
import styled from 'styled-components';

const ArticleGrid = styled.ul`
  margin-top: 2em;
`;

const ArticleCard = styled.li`
    display: grid; 
    margin: 2em 0;
    grid-gap: 1em;
    @media screen and (max-width: 768px){
    grid-template-columns: 1fr; 
    }
    grid-template-columns: 1fr 3fr; 
`;

const RespImg = styled.img`
  width: 100%;
  @media screen and (max-width: 768px){
    margin: 2em 0; 
  }

  &:hover{
    opacity: 0.8;
  }
`;

const Excerpt = styled.p`
  padding: 1em 0;
`;

const fetcher = url => fetch(url).then(res => res.json())
const PAGE_SIZE = 10;

export default function Tech(): JSX.Element {
    const router = useRouter()
    const categoryPath = router.query.category
    const title = 'Tech';
    // console.log(catPosts);
      
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
    
    const textVisualContent = {
        textVisualHeading: 'Roll a number?',
        textVisualContent: 'You are running low on shrubbery',
        textVisualImage: '/assets/img/conf.jpg',
        link: 'tech/testing',
        linkText: 'Buy Shrub'
      }

    return(
        <Layout>
            <StaticHeader content={`Bespoke category: ${title.charAt(0).toUpperCase() + title.slice(1) } - Example Case`} />
            
            <section className={'c-section tech'}>
            <div className="o-wrapper">
                <ArticleGrid>

                {!data ? <h1 className={'b-text__heading'}>Loading posts...</h1> :
               
                    posts.map(({ title, slug, index, jetpack_featured_media_url, excerpt }) => {
                        return(
                            <ArticleCard key={index}>
                                <Link href={`/tech/${slug}`}><a><RespImg src={jetpack_featured_media_url} width={250} height={300} /></a></Link>
                                <div>
                                    <Link href={`/tech/${slug}`}>
                                        <a className={`no-underline`}><h2 className={'b-text__heading'}>{title.rendered}</h2></a>
                                    </Link>
                                    <Excerpt dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
                                </div>
                            </ArticleCard>
                        )
                    })}
                </ArticleGrid>
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
            <TextVisual 
                textVisualHeading={textVisualContent.textVisualHeading}
                textVisualContent={textVisualContent.textVisualContent}
                textVisualImage={textVisualContent.textVisualImage}
                link={textVisualContent.link}
                linkText={textVisualContent.linkText}
                />
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



