import { useRouter } from 'next/router'
import styles from './../../styles/Inner.module.css';
import Layout from './../../components/Layout';
import Header from './../../components/Header';
import TextVisual from './../../components/TextVisual';
import Related from './../../components/Related';
import Link from 'next/link';
import styled from 'styled-components';

const ArticleGrid = styled.ul`
  margin-top: 2em;
`;


import StaticHeader from '../../components/StaticHeader';


export default function Category({ catPosts }) {
    
    console.log(catPosts)
    
    
    const router = useRouter()
    const categoryPath = router.query.category
    
    const textVisualContent = {
        title: 'Go to Work',
        content: 'Something something something blort. Here goes...',
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
                <ArticleGrid>
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
                </ArticleGrid>
            
                <Link href={`/`}><a>Home</a></Link>
            </div> 
            </section>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const slug = context.query.category
    // console.log(slug);
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/category/${slug}.json`);
    let data = await res.json();
    
    return {
        props: { 
            catPosts: data.data,
        }
    };
}
